const loadLessons = () => {
  fetch(`https://openapi.programming-hero.com/api/levels/all`)
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};
// load Word cards
const loadWords = (level) => {
  fetch(`https://openapi.programming-hero.com/api/level/${level}`)
    .then((res) => res.json())
    .then((data) => displayWords(data.data));
};

// display word cards
const displayWords = (words) => {
  const wordSection = document.getElementById("word-section");
  wordSection.innerHTML = "";
  if (words.length === 0) {
    wordSection.innerHTML = `
    <div class = "col-span-full ">
    <p class="text-center text-xs my-5">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <p class="text-center text-2xl font-semibold">নেক্সট Lesson এ যান</p>
    </div>
    `;
  }
  words.forEach((word) => {
    const wordDiv = document.createElement("div");
    console.log(word);
    wordDiv.innerHTML = `
    <div class="bg-white text-center rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-bold">${
            word.word ? word.word : "word not found"
          }</h2>
          <p class="text-sm font-semibold my-2">Meaning /Pronounciation</p>
          <p class="text-xl font-semibold bangla-font">"${
            word.meaning ? word.meaning : "no word found"
          } / ${word.pronunciation ? word.pronunciation : "no word found"}"</p>
          <div class="flex justify-between">
            <button><i class="fa-solid fa-circle-info"></i></button>
            <button><i class="fa-solid fa-volume-low"></i></button>
          </div>
        </div>
    `;
    wordSection.appendChild(wordDiv);
  });
};

const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  lessons.forEach((lesson) => {
    // console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = ` 
            <button onclick="loadWords(${lesson.level_no})" href="#" class="btn btn-primary border-[#3F51B5] text-[#3F51B5] bg-transparent rounded-md">
                  <i class="fa-solid fa-book-open-reader"></i> Lesson ${lesson.level_no}
            </button>
    `;
    levelContainer.appendChild(btnDiv);
  });
};

loadLessons();
