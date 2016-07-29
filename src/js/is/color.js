export default function isColor(data) {
	var ele = document.createElement("div");
    ele.style.color = data;
    return ele.style.color.split(/\s+/).join('').toLowerCase();
}
