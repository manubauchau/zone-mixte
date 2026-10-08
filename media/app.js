const data = window.sharedRaceData;
const selectedRiders = new Set();

function getRequestMap() {
  return data.mediaRequests.reduce((map, item) => {
    map[item.riderId] = item.outlets;
    return map;
  }, {});
}

function renderTeamList() {
  const teamList = document.getElementById('teamList');
  const requestMap = getRequestMap();

  teamList.innerHTML = data.teams.map((team) => {
    const riderMarkup = team.riders.map((rider) => {
      const outlets = requestMap[rider.id] || [];
      const isChecked = selectedRiders.has(rider.id);
      return `
        <label class="rider-item">
          <input type="checkbox" data-rider-id="${rider.id}" ${isChecked ? 'checked' : ''} />
          <div class="rider-text">
            <span class="rider-name">${rider.name}</span>
            <span class="rider-team">${team.name}</span>
          </div>
          <span class="request-pill ${outlets.length > 2 ? '' : 'low'}">${outlets.length}</span>
        </label>
      `;
    }).join('');

    return `
      <div class="team-card">
        <div class="team-header">
          <strong>${team.name}</strong>
          <span class="count-badge">${team.riders.length}</span>
        </div>
        ${riderMarkup}
      </div>
    `;
  }).join('');

  document.querySelectorAll('[data-rider-id]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const riderId = event.target.dataset.riderId;
      if (event.target.checked) selectedRiders.add(riderId);
      else selectedRiders.delete(riderId);
      renderSummary();
    });
  });

  renderSummary();
}

function renderSummary() {
  const selectedNames = [...selectedRiders]
    .map((riderId) => data.teams.flatMap((team) => team.riders).find((rider) => rider.id === riderId)?.name)
    .filter(Boolean);

  const totalRequests = data.mediaRequests.reduce((count, request) => count + request.outlets.length, 0);
  const summary = document.getElementById('selectedSummary');

  document.getElementById('selectionTotal').textContent = String(selectedNames.length);
  document.getElementById('teamTotal').textContent = String(data.teams.length);
  document.getElementById('requestTotal').textContent = String(totalRequests);

  if (!selectedNames.length) {
    summary.classList.add('empty');
    summary.textContent = 'Aucune sélection pour le moment.';
    return;
  }

  summary.classList.remove('empty');
  const chips = selectedNames.slice(0, 6).map((name) => `<span class="selection-chip">${name}</span>`).join('');
  const extra = selectedNames.length > 6 ? `<span class="selection-chip">+${selectedNames.length - 6}</span>` : '';
  summary.innerHTML = `${chips}${extra}`;
}

function validateSelection() {
  const selectedNames = [...selectedRiders]
    .map((riderId) => data.teams.flatMap((team) => team.riders).find((rider) => rider.id === riderId)?.name)
    .filter(Boolean);

  const detail = document.getElementById('selectedSummary');
  if (!selectedNames.length) {
    detail.classList.remove('empty');
    detail.textContent = 'Sélectionnez au moins un coureur pour valider.';
    return;
  }

  const mediaName = document.getElementById('mediaOutletSelect').value;
  detail.classList.remove('empty');
  detail.innerHTML = `<span class="selection-chip">${selectedNames.length} coureurs sélectionnés pour ${mediaName}</span>`;
}

function bindEvents() {
  document.getElementById('submitSelection').addEventListener('click', validateSelection);
}

function init() {
  renderTeamList();
  bindEvents();
}

init();
