import time
from datetime import date
from math import ceil


def convert_dates(given_date):
    # converts date format
    return date(*[int(e) for e in given_date.split("/")[::-1]])


def get_age(birth_date, death_date):
    # calculates the age of the given person
    birth_date = convert_dates(birth_date.split("\n")[1])
    # check if the death date is known or the person is still alive
    check_character = death_date[-3:-2]
    if check_character == "ğ":
        current_time = time.strftime("%d/%m/%Y")    # get the current time
        death_date = convert_dates(current_time)
    elif check_character == "m":
        death_date = birth_date     # give the same date with birth date so we can decompose those with age: 0
    else:
        death_date = convert_dates(death_date.split("\n")[1])
    age = ceil((death_date - birth_date).days / 365)
    return age
