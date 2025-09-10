const express = require('express');
description,
filename: req.file ? `/uploads/${req.file.filename}` : '',
uploader: req.user._id,
tags: tags ? tags.split(',').map(t=>t.trim()) : [],
genres: genres ? genres.split(',').map(t=>t.trim()) : [],
studio,
releaseYear: releaseYear ? parseInt(releaseYear) : null,
actors: actors ? actors.split(',').map(a=>a.trim()) : [],
directors: directors ? directors.split(',').map(d=>d.trim()) : []
});
await resource.save();
res.json(resource);
}catch(err){
res.status(500).json({ message: err.message });
}
});


// search & filter
router.get('/search', async (req, res) => {
try{
const { q, tag, genre, title, actor, director, year } = req.query;
const query = {};
if(q) query.$text = { $search: q };
if(tag) query.tags = tag;
if(genre) query.genres = genre;
if(title) query.title = new RegExp(title, 'i');
if(actor) query.actors = actor;
if(director) query.directors = director;
if(year) query.releaseYear = parseInt(year);


const results = await Resource.find(query).populate('uploader', 'name email');
res.json(results);
}catch(err){
res.status(500).json({ message: err.message });
}
});


// rate resource
router.post('/:id/rate', authMiddleware, async (req, res) => {
try{
const { score } = req.body; // 1..5
const resrc = await Resource.findById(req.params.id);
if(!resrc) return res.status(404).json({ message: 'Not found' });
// replace if user already rated
const existing = resrc.ratings.find(r => r.user.toString() === req.user._id.toString());
if(existing) existing.score = score;
else resrc.ratings.push({ user: req.user._id, score });
await resrc.save();
res.json(resrc);
}catch(err){
res.status(500).json({ message: err.message });
}
});


// get resource by id
router.get('/:id', async (req, res) => {
try{
const resrc = await Resource.findById(req.params.id).populate('uploader', 'name');
if(!resrc) return res.status(404).json({ message: 'Not found' });
res.json(resrc);
}catch(err){
res.status(500).json({ message: err.message });
}
});


module.exports = router;