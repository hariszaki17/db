const Model = require("../models/Model")
const View = require("../views/View")

class Controller {
    static readEmployeeByName(name) {
        Model.readEmployeeByName(name, (err, res) => {
            if (err) {
                View.showError(err)
            } else {
                View.showRead(res)
            }
        })
    }

    static readProjectAbove1Billion() {
        Model.readProjectAbove1Billion((err, res) => {
            if (err) {
                View.showError(err)
            } else {
                View.showRead(res)
            }
        })
    }

    static readNumEmployeeInProjectFeature() {
        Model.readNumEmployeeInProjectFeature((err, res) => {
            if (err) {
                View.showError(err)
            } else {
                View.showRead(res)
            }
        })
    }

    static readEmployeeSort(column, sort) {
        Model.readEmployeeSort(column, sort, (err, res) => {
            if (err) {
                View.showError(err)
            } else {
                View.showRead(res)
            }
        })
    }
}

module.exports = Controller