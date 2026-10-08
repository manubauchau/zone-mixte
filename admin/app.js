const data = window.sharedRaceData;
const state = {
  raceName: data.raceName,
  raceDate: data.raceDate,
  stages: [...data.stages],
  teams: [...data.teams],
  daily: { ...data.daily }
};

const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

function setTab(tabName) {
  tabs.forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tabName);
  });
  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === `${tabName}Tab`);
  });
}

function renderRaceConfig() {
  document.getElementById('raceNameInput').value = state.raceName;
  document.getElementById('raceDateInput').value = state.raceDate;
}

function renderStages() {
  const stageList = document.getElementById('stageList');
  stageList.innerHTML = state.stages.map((stage) => `
    <li>
      <div>
        <strong>${stage.name}</strong>
        <small>${new Date(stage.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</small>
      </div>
      <div class="item-actions">
        <button class="btn-ghost" type="button" data-remove-stage="${stage.id}">Supprimer</button>
      </div>
    </li>
  `).join('');

  document.querySelectorAll('[data-remove-stage]').forEach((button) => {
    button.addEventListener('click', () => {
      state.stages = state.stages.filter((stage) => stage.id !== button.dataset.removeStage);
      renderStages();
    });
  });
}

function renderTeams() {
  const teamList = document.getElementById('teamList');
  teamList.innerHTML = state.teams.map((team) => `
    <div class="team-card">
      <div class="team-card-header">
        <strong>${team.name}</strong>
        <span class="tag">${team.short}</span>
      </div>
      <ul>
        ${team.riders.map((rider) => `<li>${rider.name}</li>`).join('')}
      </ul>
      <div class="item-actions" style="margin-top: 12px; justify-content: flex-end;">
        <button class="btn-danger" type="button" data-remove-team="${team.id}">Supprimer</button>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('[data-remove-team]').forEach((button) => {
    button.addEventListener('click', () => {
      state.teams = state.teams.filter((team) => team.id !== button.dataset.removeTeam);
      renderTeams();
      renderWithdrawalOptions();
    });
  });
}

function renderDaily() {
  document.getElementById('selectionStartInput').value = state.daily.selectionWindow.start;
  document.getElementById('selectionEndInput').value = state.daily.selectionWindow.end;
  document.getElementById('convocationStartInput').value = state.daily.mediaConvocations.start;
  document.getElementById('convocationEndInput').value = state.daily.mediaConvocations.end;
  renderWithdrawalOptions();
  renderWithdrawals();
}

function renderWithdrawalOptions() {
  const select = document.getElementById('withdrawalRiderInput');
  const riders = state.teams.flatMap((team) => team.riders.map((rider) => ({ ...rider, teamName: team.name })));

  select.innerHTML = riders.map((rider) => `<option value="${rider.id}">${rider.name}</option>`).join('');
  document.getElementById('withdrawalDateInput').value = state.raceDate;
}

function renderWithdrawals() {
  const list = document.getElementById('withdrawalList');
  list.innerHTML = state.daily.withdrawals.map((withdrawal) => `
    <li>
      <div>
        <strong>${withdrawal.riderName}</strong>
        <small>${withdrawal.reason} · ${new Date(withdrawal.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</small>
      </div>
      <button class="btn-danger" type="button" data-remove-withdrawal="${withdrawal.id}">Supprimer</button>
    </li>
  `).join('');

  document.querySelectorAll('[data-remove-withdrawal]').forEach((button) => {
    button.addEventListener('click', () => {
      state.daily.withdrawals = state.daily.withdrawals.filter((withdrawal) => withdrawal.id !== button.dataset.removeWithdrawal);
      renderWithdrawals();
    });
  });
}

function addStage(event) {
  event.preventDefault();
  const name = document.getElementById('stageNameInput').value.trim();
  const date = document.getElementById('stageDateInput').value;
  if (!name || !date) return;

  state.stages.unshift({ id: `stage-${Date.now()}`, name, date });
  document.getElementById('stageForm').reset();
  renderStages();
}

function addTeam(event) {
  event.preventDefault();
  const name = document.getElementById('teamNameInput').value.trim();
  const short = document.getElementById('teamShortInput').value.trim();
  const attaché = document.getElementById('teamAttachéInput').value.trim();
  const ridersText = document.getElementById('teamRidersInput').value;

  if (!name || !short || !attaché || !ridersText) return;

  const riders = ridersText
    .split(/\n|,/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((riderName) => ({ id: riderName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-'), name: riderName }));

  state.teams.unshift({
    id: `${short.toLowerCase()}-${Date.now()}`,
    name,
    short,
    attaché,
    riders
  });

  document.getElementById('teamForm').reset();
  renderTeams();
  renderWithdrawalOptions();
}

function updateRace(event) {
  event.preventDefault();
  state.raceName = document.getElementById('raceNameInput').value.trim() || state.raceName;
  state.raceDate = document.getElementById('raceDateInput').value || state.raceDate;
  renderRaceConfig();
}

function updateSelectionWindow(event) {
  event.preventDefault();
  const start = document.getElementById('selectionStartInput').value;
  const end = document.getElementById('selectionEndInput').value;
  state.daily.selectionWindow = { start, end, description: 'Sélection des coureurs par les médias' };
}

function updateConvocations(event) {
  event.preventDefault();
  const start = document.getElementById('convocationStartInput').value;
  const end = document.getElementById('convocationEndInput').value;
  state.daily.mediaConvocations = { start, end, description: 'Convocation de l’équipe en interview' };
}

function addWithdrawal(event) {
  event.preventDefault();
  const riderId = document.getElementById('withdrawalRiderInput').value;
  const rider = state.teams.flatMap((team) => team.riders).find((member) => member.id === riderId);
  const date = document.getElementById('withdrawalDateInput').value || state.raceDate;
  const reason = document.getElementById('withdrawalReasonInput').value.trim();

  if (!rider || !reason) return;

  state.daily.withdrawals.unshift({
    id: `withdrawal-${Date.now()}`,
    riderId: rider.id,
    riderName: rider.name,
    date,
    reason
  });

  document.getElementById('withdrawalForm').reset();
  renderWithdrawals();
  renderWithdrawalOptions();
}

function bindEvents() {
  tabs.forEach((button) => {
    button.addEventListener('click', () => setTab(button.dataset.tab));
  });

  document.getElementById('raceForm').addEventListener('submit', updateRace);
  document.getElementById('stageForm').addEventListener('submit', addStage);
  document.getElementById('teamForm').addEventListener('submit', addTeam);
  document.getElementById('selectionForm').addEventListener('submit', updateSelectionWindow);
  document.getElementById('convocationForm').addEventListener('submit', updateConvocations);
  document.getElementById('withdrawalForm').addEventListener('submit', addWithdrawal);
}

function init() {
  renderRaceConfig();
  renderStages();
  renderTeams();
  renderDaily();
  bindEvents();
  setTab('course');
}

init();
