# Foster parent shortlisting and availability prototype.

Prototype to enable key user journey and functionality to filter foster parent profiles that match a child's profile, creating a shortlist that authorities can use to aid successful child placements.

Built on top of the [GOV prototype toolkit](https://govuk-prototype-kit.herokuapp.com/docs/install)

## Screenshots

- [find child](https://raw.githubusercontent.com/DFE-Digital/fa-availability-prototype/master/docs/documentation/screenshots/page1.png)
- [child confirmation](https://raw.githubusercontent.com/DFE-Digital/fa-availability-prototype/master/docs/documentation/screenshots/page2.png)
- [foster parent shortlist](https://raw.githubusercontent.com/DFE-Digital/fa-availability-prototype/master/docs/documentation/screenshots/page3.png)
- [my foster parent list](https://raw.githubusercontent.com/DFE-Digital/fa-availability-prototype/master/docs/documentation/screenshots/page4.png)
- [child profile](https://raw.githubusercontent.com/DFE-Digital/fa-availability-prototype/master/docs/documentation/screenshots/page5.png)
- [foster parent profile](https://raw.githubusercontent.com/DFE-Digital/fa-availability-prototype/master/docs/documentation/screenshots/page6.png)

## Live examples

- [Fostering Availability Prototype](https://dfe-shortlisting.herokuapp.com/)

## Technical documentation

The prototype uses predefined data. One child that is hardcoded in the templates, and a selection of foster parents in JSON format [here](https://github.com/DFE-Digital/fa-availability-prototype/blob/master/app/data/foster-parents.js)

The first page of the prototype 'find child' is there for display purposes only i.e entering data and submitting this page takes you 'child confirmation' page that shows the name, age, sex of the same child.

The next page shows the parents from the JSON file. The filters are there for display purposes only apart from the `Types of foster care approved for` filter which submits the form with GET param that us used to perform `array.filter` on the foster parent data. any foster parent can be added to `my list` using the add to list button. This submits POST request and the handler will add or remove a `selected` flag that denotes the foster parent being in my list.

The my list page filters out foster parents that are not selected and hence displays selected parents.

You can view the full profile of the child or a chosen parent.

### Dependencies

- [NodeJS](https://nodejs.org/en/) - version 10+
- [npm](https://www.npmjs.com/) - version 6.13.4

### Running the application in development

`npm install`
`npm start`

Application will run on `http://localhost:3000`

[More detailed infomation can be found here](https://github.com/DFE-Digital/fa-availability-prototype/tree/master/docs/documentation/install)

### Running the test suite

There are no tests implemented as this application is for prototype purposes only.

### Data structure of example foster parent 

```
  {
    "id": 1,
    "title": "Mr",
    "fname": "John",
    "surname": "Smith",
    "address": "2, High St, Greenwich, London",
    "email": "j.smith@gmail.com",
    "gender": "Male",
    "type": "Long-term",
    "childAgeRange": "0-2",
    "noExistingChildren": 1,
    "nationality": "British",
    "ethnic": "British",
    "language": "English",
    "language2": "English",
    "religion": "Christian",
    "practising": "No",
    "pets": "Dog",
    "drivingLicence": "Yes",
    "car": "Yes",
    "contact": "02084762369",
    "workingThrough": "IFA",
    "bedsAvailable": 2,
    "houseType": "Flat"
  }
  ```

## Licence

[MIT License](LICENCE)

