let db = [];


fetch("data/movies.json")
.then(r => r.json())
.then(data => db = data);




generate.onclick = async () => {
const title = document.getElementById("title").value;
const text = await gemini(`اكتب وصفًا احترافيًا لفيلم بعنوان ${title}`);
description.value = text;
};


save.onclick = () => {
db.push({
title: title.value,
poster: poster.value,
description: description.value
});


alert("تمت الإضافة (احفظ الملف يدويًا في النسخة الثابتة)");
};
