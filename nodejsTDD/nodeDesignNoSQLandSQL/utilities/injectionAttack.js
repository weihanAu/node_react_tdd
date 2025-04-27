function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')  // 把 & 变成 &amp;
    .replace(/</g, '&lt;')   // 把 < 变成 &lt;
    .replace(/>/g, '&gt;')   // 把 > 变成 &gt;
    .replace(/"/g, '&quot;') // 把 " 变成 &quot;
    .replace(/'/g, '&#39;'); // 把 ' 变成 &#39;
}

// joi package 
// validate
const Joi = require('joi');
// 定义 schema
const updateTodoSchema = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean().required(),
});
const { error } = updateTodoSchema.validate({ title, completed });
