document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('schedule');
  const searchInput = document.getElementById('searchInput');
  let talks = [];

  fetch('/api/talks')
    .then(response => response.json())
    .then(data => {
      talks = data;
      renderSchedule(talks);
    });

  function renderSchedule(talksToRender) {
    scheduleContainer.innerHTML = '';
    talksToRender.forEach(talk => {
      const talkElement = document.createElement('div');
      talkElement.classList.add('talk');

      if (talk.title === 'Lunch Break') {
        talkElement.classList.add('break');
      }

      const speakers = talk.speakers.join(', ');
      const categories = talk.category.map(cat => ` <span>${cat}</span>`).join('');

      talkElement.innerHTML = `
        <div class="talk-time">${talk.time}</div>
        <h2 class="talk-title">${talk.title}</h2>
        ${speakers ? ` <div class="talk-speakers">By: ${speakers}</div>` : ''}
        <p>${talk.description}</p>
        <div class="talk-category">${categories}</div>
      `;

      scheduleContainer.appendChild(talkElement);
    });
  }

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTalks = talks.filter(talk => {
      if (talk.title === 'Lunch Break') return true; // Always show lunch break
      return talk.category.some(cat => cat.toLowerCase().includes(searchTerm));
    });
    renderSchedule(filteredTalks);
  });
});
