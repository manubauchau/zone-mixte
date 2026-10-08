const data = window.sharedRaceData;
const team = data.teams.find((item) => item.id === 'uae') || data.teams[0];

function renderPress() {
  document.getElementById('teamName').textContent = team.name;
  document.getElementById('teamCode').textContent = team.short;

  const requestMap = data.mediaRequests.reduce((map, request) => {
    map[request.riderId] = request.outlets;
    return map;
  }, {});

  const riderList = document.getElementById('riderList');
  riderList.innerHTML = team.riders.map((rider) => {
    const requests = requestMap[rider.id] || [];
    const badges = requests.length
      ? requests.map((outlet) => `<span class="request-badge">${outlet}</span>`).join('')
      : '<span class="empty-badge">Aucune</span>';

    return `
      <div class="rider-card">
        <div>
          <strong>${rider.name}</strong>
          <small>${team.name}</small>
        </div>
        <div class="request-list">${badges}</div>
      </div>
    `;
  }).join('');
}

renderPress();
