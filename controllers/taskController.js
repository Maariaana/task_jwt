const list = (req, res) => {
    res.send({ message: 'List of tasks' });
};

module.exports = {
    list,
};