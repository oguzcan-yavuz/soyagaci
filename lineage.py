# -*- coding: utf-8 -*-
import textract
import re
import json


def gunicorn_server(environ, start_response):
    data = get_lineage()
    start_response("200 OK", [
        ("Content-Type", "text/plain"),
        ("Content-Length", str(len(data)))
    ])
    return iter([data])


def trim_string(string):
    start = string.find("Durumu\n\n")
    end = string.find("AÇIKLAMALAR")
    return string[start + len("Durumu\n\n"):end]


def refine_list(result):
    refine_results, index = [], 0
    while index < len(result):
        if "https" in result[index]:
            index += 15
        else:
            refine_results.append(result[index])
            index += 1
    return refine_results


def create_kinship_dict(people_list):
    result_dict = {}
    for person in people_list:
        person_details = person.split('///')
        kinship = ''.join([c for c in person_details[0] if c.isupper()])
        result_dict[kinship] = person_details
    return result_dict


json_result = {
    "nodeStructure": {}
}
json_pointer = json_result["nodeStructure"]


def refine_kinship_dict(kinship_dict, current_relative, json_dict_pointer):
    if current_relative == "K":
        json_dict_pointer["text"] = {
            "name": current_relative + ": " + kinship_dict[current_relative][1] + " " + kinship_dict[current_relative][2]
        }
        json_dict_pointer["children"] = []
        refine_kinship_dict(kinship_dict, "", json_dict_pointer["children"])
    if current_relative + "A" in kinship_dict:
        json_dict_pointer.append({
            "text": {
                "name": current_relative + "A: " + kinship_dict[current_relative + "A"][1] + " " + kinship_dict[current_relative + "A"][2]
            },
            "children": []
        })
        refine_kinship_dict(kinship_dict, current_relative + "A", json_dict_pointer[-1]["children"])
    if current_relative + "B" in kinship_dict:
        json_dict_pointer.append({
            "text": {
                "name": current_relative + "B: " + kinship_dict[current_relative + "B"][1] + " " + kinship_dict[current_relative + "B"][2]
            },
            "children": []
        })
        refine_kinship_dict(kinship_dict, current_relative + "B", json_dict_pointer[-1]["children"])


def get_lineage():
    split_pattern = re.compile(r'\d+///(E|K)///|\d+ (E|K)///')
    pdf = textract.process('yigit_soy.pdf', method='pdftotext')
    trimmed_str = trim_string(pdf.decode('utf-8'))
    results = trimmed_str.split("\n\n")
    refined_results = refine_list(results)
    split_by_people = re.split(split_pattern, '///'.join(refined_results))[1:]
    split_by_people = [person for person in split_by_people if person]
    refined_people = []

    for i in range(1, len(split_by_people), 2):
        refined_people.append(split_by_people[i] + split_by_people[i - 1])

    refined_people.reverse()  # reverse the list to start with the youngest
    kinship_dict = create_kinship_dict(refined_people)
    refine_kinship_dict(kinship_dict, "K", json_pointer)
    json_result["details"] = kinship_dict
    print(json_result["details"])
    return json.dumps(json_result, ensure_ascii=False)


print(get_lineage())
