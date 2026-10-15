'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function text(v, name, max=200) {
  if (typeof v !== 'string' || !v.trim() || v.length > max || /[\u0000-\u001f]/.test(v)) throw Error(`Invalid ${name}`);
  return v;
}
function url(v) {
  const u = new URL(text(v, 'URL', 1000));
  if (u.protocol !== 'https:' || u.username || u.password) throw Error('Only public HTTPS URLs are allowed');
  return u.href;
}
function validate(data) {
  if (!data || data.version !== 1 || !Array.isArray(data.projects) || data.projects.length > 100) throw Error('Expected version 1 and up to 100 projects');
  const ids = new Set();
  return data.projects.map(p => {
    if (!p || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.id) || p.id.length > 240 || ids.has(p.id)) throw Error('Invalid or duplicate project id');
    ids.add(p.id);
    if (!Array.isArray(p.tags) || !p.tags.length || p.tags.length > 8) throw Error('Expected 1–8 tags');
    const type = p.type || 'project';
    if (!['project','pdf','anki','guide','course','other'].includes(type)) throw Error('Invalid resource type');
    if (['pdf','anki'].includes(type) && !p.download) throw Error('PDF and Anki resources need a download link');
    return {type,language:text(p.language || 'English','language',60),subject:text(p.subject || p.tags[0],'subject',60),level:text(p.level || 'All levels','level',60),...(p.download ? {download:url(p.download)} : {}),id:p.id,title:text(p.title,'title',100),description:text(p.description,'description',600),author:text(p.author,'author',100),tags:p.tags.map(t=>text(t,'tag',40)),license:text(p.license,'license',100),source:url(p.source),...(p.demo ? {demo:url(p.demo)} : {})};
  });
}
validate(JSON.parse(fs.readFileSync(path.join(__dirname, 'projects.json'), 'utf8')));
console.log('Resource catalogue is valid');
