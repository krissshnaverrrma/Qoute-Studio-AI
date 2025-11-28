const quoteEl = document.getElementById("quote-text");
const authorEl = document.getElementById("author-text");
const topicLabel = document.getElementById("current-topic");
const cardEl = document.getElementById("capture-area");
const editBtn = document.getElementById("edit-btn");
const generateContainer = document.getElementById("generate-container");

let isEditMode = false;

function shareSocial(platform) {
	const text = `"${quoteEl.innerText}" — ${authorEl.innerText}`;
	const encodedText = encodeURIComponent(text);
	const currentUrl = encodeURIComponent(window.location.href);

	let url = "";

	switch (platform) {
		case "x":
			url = `https://twitter.com/intent/tweet?text=${encodedText}`;
			window.open(url, "_blank");
			break;

		case "facebook":
			url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${encodedText}`;
			window.open(url, "_blank");
			break;

		case "whatsapp":
			url = `https://wa.me/?text=${encodedText}`;
			window.open(url, "_blank");
			break;

		case "telegram":
			url = `https://t.me/share/url?url=${currentUrl}&text=${encodedText}`;
			window.open(url, "_blank");
			break;

		case "instagram":
			alert("Instagram requires an image. Downloading now...");
			downloadImage();
			break;
	}
}

function toggleEditMode() {
	isEditMode = !isEditMode;
	if (isEditMode) {
		quoteEl.contentEditable = "true";
		authorEl.contentEditable = "true";
		editBtn.classList.add("active-tool");
		generateContainer.style.display = "none";
		quoteEl.focus();
	} else {
		quoteEl.contentEditable = "false";
		authorEl.contentEditable = "false";
		editBtn.classList.remove("active-tool");
		generateContainer.style.display = "block";
	}
}

async function fetchQuote() {
	if (isEditMode) return;

	const tagSelector = document.getElementById("tag-selector");
	const selectedTag = tagSelector.value;

	quoteEl.style.opacity = 0.5;

	try {
		const res = await fetch(`/api/get-quote?tag=${selectedTag}`);
		const data = await res.json();
		const activeTag = data.tag || selectedTag;

		quoteEl.style.opacity = 1;
		authorEl.style.opacity = 1;

		quoteEl.innerText = `"${data.content}"`;
		authorEl.innerText = data.author;
		topicLabel.innerText = activeTag.toUpperCase();
	} catch (err) {
		console.error("Error:", err);
		quoteEl.style.opacity = 1;
		quoteEl.innerText = '"Simplicity is the soul of efficiency."';
		authorEl.innerText = "Austin Freeman";
	}
}

function copyText() {
	const textToCopy = `${quoteEl.innerText}\n— ${authorEl.innerText}`;
	navigator.clipboard.writeText(textToCopy).then(() => alert("Copied!"));
}

function downloadImage() {
	const originalShadow = cardEl.style.boxShadow;
	cardEl.style.boxShadow = "none";
	if (isEditMode) toggleEditMode();
	quoteEl.style.opacity = 1;
	authorEl.style.opacity = 1;

	html2canvas(cardEl, {
		useCORS: true,
		backgroundColor: null,
		scale: 2,
	}).then((canvas) => {
		const link = document.createElement("a");
		link.download = `quote-${Date.now()}.png`;
		link.href = canvas.toDataURL();
		link.click();
		cardEl.style.boxShadow = originalShadow;
	});
}

fetchQuote();

const modal = document.getElementById("about-modal");

function openModal() {
	modal.classList.add("active");
}

function closeModal(event) {
	if (event.target === modal || event.target.closest(".close-btn")) {
		modal.classList.remove("active");
	}
}

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && modal.classList.contains("active")) {
		closeModal({ target: modal });
	}
});
