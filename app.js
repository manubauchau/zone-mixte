const teams = [
  {
    name: 'UAE Team Emirates XRG',
    short: 'UAE',
    attaché: 'Élodie Martin',
    riders: ['Tadej Pogačar', 'Adam Yates', 'João Almeida', 'Marco Trentin', 'Brandon McNulty', 'Mikkel Bjerg', 'Nils Politt', 'Rui Costa']
  },
  {
    name: 'Visma - Lease a Bike',
    short: 'VLS',
    attaché: 'Camille Moreau',
    riders: ['Jonas Vingegaard', 'Wout van Aert', 'Sepp Kuss', 'Matteo Jorgenson', 'Wilco Kelderman', 'Tiesj Benoot', 'Cian Uijtdebroeks', 'Jan Tratnik']
  },
  {
    name: 'Soudal - Quick-Step',
    short: 'SOQ',
    attaché: 'Pauline Garnier',
    riders: ['Remco Evenepoel', 'Julian Alaphilippe', 'Mauro Schmid', 'Tim Merlier', 'Pieter Serry', 'Benoît Cosnefroy', 'Louis Vervaeke', 'Ethan Hayter']
  },
  {
    name: 'INEOS Grenadiers',
    short: 'IGD',
    attaché: 'Claire Dubois',
    riders: ['Tom Pidcock', 'Carlos Rodríguez', 'Egan Bernal', 'Thymen Arensman', 'Ben Turner', 'Pavel Sivakov', 'Joshua Tarling', 'Jonathan Castroviejo']
  },
  {
    name: 'Bora - hansgrohe',
    short: 'BOH',
    attaché: 'Sarah Lemoine',
    riders: ['Primož Roglič', 'Jai Hindley', 'Gianni Moscon', 'Maximilian Schachmann', 'Florian Lipowitz', 'Matteo Fabbro', 'Daniel Felipe Martínez', 'Nils Sinschek']
  },
  {
    name: 'Groupama - FDJ',
    short: 'GFC',
    attaché: 'Aurélie Bernard',
    riders: ['David Gaudu', 'Valentin Madouas', 'Lewis Askey', 'Quentin Pacher', 'Paul Lapeira', 'Lenny Martinez', 'Mickaël Chérel', 'Rudy Moliner']
  },
  {
    name: 'Decathlon AG2R La Mondiale',
    short: 'DAT',
    attaché: 'Noémie Besson',
    riders: ['Bastien Tronchon', 'Dorian Godon', 'Ben O’Connor', 'Valentin Ferron', 'Clément Berthet', 'Alexis Gougeard', 'Mika Heming', 'Hugo Houle']
  },
  {
    name: 'EF Education - EasyPost',
    short: 'EFE',
    attaché: 'Lucie Renaud',
    riders: ['Richard Carapaz', 'Neilson Powless', 'Ben Healy', 'Kasper Asgreen', 'Darren Rafferty', 'Stefan Bissegger', 'Alex Baudin', 'Nicolas Debeaumarché']
  },
  {
    name: 'Lotto Dstny',
    short: 'LTD',
    attaché: 'Hugo Delfosse',
    riders: ['Arnaud De Lie', 'Caleb Ewan', 'Victor Campenaerts', 'Luca Van Balois', 'Jasper De Buyst', 'Jonas Rutsch', 'Maxim Van Gils', 'Florian Vermeersch']
  },
  {
    name: 'Team Picnic - PostNL',
    short: 'TNN',
    attaché: 'Emma Vercauteren',
    riders: ['Wout Poels', 'Jasper Stuyven', 'Kevin Geniets', 'Tobias Foss', 'Timo Roosen', 'Daan Hoole', 'Sam Oomen', 'Milan Vader']
  },
  {
    name: 'Alpecin - Deceuninck',
    short: 'ADC',
    attaché: 'Manon Dupont',
    riders: ['Mathieu van der Poel', 'Kaden Groves', 'Jasper Philipsen', 'Johan Jacobs', 'Gianni Vermeersch', 'Xandro Meurisse', 'Robbe Ghys', 'Timo Kielich']
  },
  {
    name: 'Arkéa - B&B Hotels',
    short: 'ARK',
    attaché: 'Jean-Pierre Lemaire',
    riders: ['Kévin Ledanois', 'Clément Champoussin', 'Christophe Laporte', 'Romain Cardis', 'Amaury Capiot', 'Émilien Jeannière', 'Jenthe Biermans', 'Thibault Guernalec']
  },
  {
    name: 'Astana Qazaqstan Team',
    short: 'AST',
    attaché: 'Inna Petrova',
    riders: ['Miguel Ángel López', 'Davide Ballerini', 'Harold Tejada', 'Joe Dombrowski', 'Anthon Charmig', 'Yevgeniy Fedorov', 'Vadim Pronskiy', 'Gianluca Brugnami']
  },
  {
    name: 'Cofidis',
    short: 'COF',
    attaché: 'Mathilde Gauthier',
    riders: ['Ion Izagirre', 'Alexandre Bardet', 'Guillaume Martin', 'Bryan Coquard', 'Thomas Bonnet', 'Ezio Maule', 'Victor Lafay', 'Rémy Rochas']
  },
  {
    name: 'Israel - Premier Tech',
    short: 'IPT',
    attaché: 'Amélie Roussel',
    riders: ['Ruben Guerreiro', 'Michael Woods', 'Derek Gee', 'Stephen Williams', 'George Bennett', 'Marius Mayrhofer', 'Nils Brun', 'Matti Breschel']
  },
  {
    name: 'Intermarché - Wanty',
    short: 'IWG',
    attaché: 'Aline Renaud',
    riders: ['Biniam Girmay', 'Danny van Poppel', 'Arne Marit', 'Luca Mozzato', 'Tobias Halland Johannessen', 'Baptiste Planckaert', 'Olivier Le Gac', 'Louis Barré']
  },
  {
    name: 'Lidl - Trek',
    short: 'LTD',
    attaché: 'Charlotte Delaunay',
    riders: ['Mads Pedersen', 'Tao Geoghegan Hart', 'Giulio Ciccone', 'Jonathan Milan', 'Bauke Mollema', 'Thibaut Pinot', 'Mattias Skjelmose', 'Markel Irizar']
  },
  {
    name: 'Movistar Team',
    short: 'MOV',
    attaché: 'Nicolas Lambert',
    riders: ['Enric Mas', 'Alejandro Valverde', 'Jorge Arcas', 'Iván García', 'Nelson Oliveira', 'Lorenzo Fortunato', 'Mikel Landa', 'Mikel Bizkarra']
  },
  {
    name: 'Bahrain Victorious',
    short: 'TBV',
    attaché: 'Sonia Bensaid',
    riders: ['Pello Bilbao', 'Matej Mohorič', 'Fred Wright', 'Jack Haig', 'Phil Bauhaus', 'Fran Miholjević', 'Damiano Caruso', 'Emanuel Buchmann']
  },
  {
    name: 'Jayco - AlUla',
    short: 'JAY',
    attaché: 'Adèle Courtois',
    riders: ['Mauro Finetto', 'Simon Yates', 'Luke Plapp', 'Chris Harper', 'Amund Grøndahl Jansen', 'Dylan Groenewegen', 'Kelland O’Brien', 'Filippo Zana']
  },
  {
    name: 'Tudor Pro Cycling Team',
    short: 'TUD',
    attaché: 'Viola Gaudin',
    riders: ['Florian Stork', 'Riaan Arend', 'Marc Hirschi', 'Michael Schär', 'Johan Price Pejtersen', 'Lukas Pöstlberger', 'Sven Erik Bystrøm', 'Matis Louvel']
  },
  {
    name: 'Uno-X Mobility',
    short: 'UXM',
    attaché: 'Lucia Ortega',
    riders: ['Alexander Kristoff', 'Jonas Abrahamsen', 'Tord Gudmestad', 'Anders Halland Johannessen', 'Rasmus Tiller', 'Søren Wærenskjold', 'Markus Hoelgaard', 'Pavel Bittner']
  }
];

const stageData = [
  { name: 'Étape 1 – Nice / Digne', date: '2026-07-02' },
  { name: 'Étape 2 – Gap / La Mure', date: '2026-07-03' },
  { name: 'Étape 3 – Saint-Étienne / Lyon', date: '2026-07-05' }
];

const mediaOutlet = 'L’Équipe';
const attachéTeam = 'UAE Team Emirates XRG';

const requestMap = {
  'Tadej Pogačar': ['L’Équipe', 'Le Monde', 'Cycling News', 'France Télévisions'],
  'Jonas Vingegaard': ['Cycling News', 'Le Soir', 'RTBF'],
  'Remco Evenepoel': ['L’Équipe', 'Le Monde', 'Eurosport'],
  'Tom Pidcock': ['France Télévisions', 'Cycling News'],
  'Primož Roglič': ['Le Courrier', 'L’Équipe'],
  'Mathieu van der Poel': ['Le Soir', 'Velo', 'RTBF'],
  'Mads Pedersen': ['L’Équipe', 'Le Monde'],
  'Richard Carapaz': ['France Télévisions', 'Cycling News'],
  'Biniam Girmay': ['RTBF', 'Cycling News'],
  'Jasper Philipsen': ['L’Équipe', 'Le Soir', 'Velo'],
  'Adam Yates': ['Le Monde', 'Velo'],
  'Wout van Aert': ['L’Équipe', 'RTBF', 'Cycling News'],
  'Sepp Kuss': ['France Télévisions'],
  'Pello Bilbao': ['Le Monde'],
  'Simon Yates': ['Cycling News', 'Le Soir'],
  'Mika Heming': ['France Télévisions'],
  'Arnaud De Lie': ['L’Équipe', 'Le Soir'],
  'Jai Hindley': ['Cycling News'],
  'Ben Healy': ['Le Monde', 'RTBF'],
  'Michael Woods': ['France Télévisions', 'Velo'],
  'Ruben Guerreiro': ['Le Soir'],
  'Enric Mas': ['L’Équipe', 'Cycling News']
};

const selectedRiders = new Set();

function renderMediaList() {
  const list = document.getElementById('mediaTeamList');
  list.innerHTML = teams.map((team) => {
    const riderCards = team.riders.map((riderName) => {
      const requestCount = (requestMap[riderName] || []).length;
      const isSelected = selectedRiders.has(riderName);
      const requestClass = requestCount > 2 ? 'rider-demand' : 'rider-demand low';

      return `
        <label class="rider-item">
          <input type="checkbox" data-rider="${riderName}" ${isSelected ? 'checked' : ''} />
          <div class="rider-meta">
            <span class="rider-name">${riderName}</span>
            <span class="rider-team">${team.name}</span>
          </div>
          <span class="${requestClass}">${requestCount}</span>
        </label>
      `;
    }).join('');

    return `
      <div class="team-block">
        <div class="team-block-header">
          <span class="team-name">${team.name}</span>
          <span class="team-count">${team.riders.length}</span>
        </div>
        <div class="rider-list">${riderCards}</div>
      </div>
    `;
  }).join('');

  const allCheckboxes = document.querySelectorAll('[data-rider]');
  allCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const riderName = event.target.dataset.rider;
      if (event.target.checked) {
        selectedRiders.add(riderName);
      } else {
        selectedRiders.delete(riderName);
      }
      updateSelectionSummary();
    });
  });

  updateSelectionSummary();
}

function updateSelectionSummary() {
  const summary = document.getElementById('mediaSelectionSummary');
  const selectionCount = document.getElementById('selectionCount');
  const requestCount = document.getElementById('requestCount');
  const selectedList = Array.from(selectedRiders);
  const totalRequests = Object.values(requestMap).reduce((sum, medias) => sum + medias.length, 0);

  selectionCount.textContent = String(selectedList.length);
  requestCount.textContent = String(totalRequests);

  if (!selectedList.length) {
    summary.classList.add('empty');
    summary.textContent = 'Aucune sélection pour le moment.';
    return;
  }

  summary.classList.remove('empty');
  const items = selectedList.slice(0, 6).map((name) => `<span class="selection-chip">${name}</span>`).join('');
  summary.innerHTML = selectedList.length > 6 ? `${items} <span class="selection-chip">+${selectedList.length - 6}</span>` : items;
}

function renderAttachéView() {
  const attachéTeamEntry = teams.find((team) => team.name === attachéTeam);
  const list = document.getElementById('attachéList');
  const title = document.getElementById('attachéTeamTitle');
  const badge = document.getElementById('attachéBadge');

  if (!attachéTeamEntry) {
    return;
  }

  title.textContent = attachéTeamEntry.name;
  badge.textContent = attachéTeamEntry.short;

  list.innerHTML = attachéTeamEntry.riders.map((riderName) => {
    const requests = requestMap[riderName] || [];
    const chips = requests.length
      ? requests.map((media) => `<span class="request-badge">${media}</span>`).join('')
      : '<span class="request-badge">Aucune</span>';

    return `
      <div class="attaché-rider-card">
        <div>
          <strong>${riderName}</strong>
          <small>${attachéTeamEntry.name}</small>
        </div>
        <div class="attaché-requests">
          <div class="request-list">${chips}</div>
        </div>
      </div>
    `;
  }).join('');
}

function renderStageList() {
  const container = document.getElementById('stageList');
  container.innerHTML = stageData.map((stage) => `
    <li class="stage-item">
      <span>${stage.name}</span>
      <span>${new Date(stage.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
    </li>
  `).join('');
}

function setActivePanel(role) {
  const tabs = document.querySelectorAll('.role-tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.role === role);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === `${role}Panel`);
  });
}

function validateSelectedRiders() {
  const selectedList = Array.from(selectedRiders);
  if (!selectedList.length) {
    const summary = document.getElementById('mediaSelectionSummary');
    summary.classList.remove('empty');
    summary.textContent = 'Sélectionnez au moins un coureur pour valider.';
    return;
  }

  const mediaName = document.getElementById('mediaSelect').value;
  const note = `${selectedList.length} coureur(s) sélectionné(s) pour ${mediaName}.`;
  const summary = document.getElementById('mediaSelectionSummary');
  summary.classList.remove('empty');
  summary.innerHTML = `<span class="selection-chip">${note}</span>`;
}

function addStage() {
  const stageName = document.getElementById('stageName').value.trim();
  const stageDate = document.getElementById('stageDate').value;

  if (!stageName || !stageDate) {
    return;
  }

  stageData.unshift({ name: stageName, date: stageDate });
  document.getElementById('stageName').value = '';
  document.getElementById('stageDate').value = '';
  renderStageList();
}

function bindEvents() {
  document.querySelectorAll('.role-tab').forEach((button) => {
    button.addEventListener('click', () => setActivePanel(button.dataset.role));
  });

  document.getElementById('validateRequests').addEventListener('click', validateSelectedRiders);
  document.getElementById('addStage').addEventListener('click', addStage);
}

function init() {
  renderMediaList();
  renderAttachéView();
  renderStageList();
  bindEvents();
  setActivePanel('media');
  document.getElementById('teamCount').textContent = String(teams.length);
}

init();
