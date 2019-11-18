const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
};

function newSkill(req, res) {
    res.render('skills/new');
};

function create(req, res) {
    Skill.create(req.body);
    res.direct('/skills');
};

function edit(req, res){
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill,
        idx: req.params.id,
    });
};