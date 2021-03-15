class View {
    static showRead(data) {
        console.table(data);
    }

    static showError(err) {
        console.log(err);
    }
}

module.exports = View