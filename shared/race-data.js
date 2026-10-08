(function (global) {
  const teams = [
    {
      id: 'uae',
      name: 'UAE Team Emirates XRG',
      short: 'UAE',
      attaché: 'Élodie Martin',
      riders: [
        { id: 'tadej-pogacar', name: 'Tadej Pogačar' },
        { id: 'adam-yates', name: 'Adam Yates' },
        { id: 'joao-almeida', name: 'João Almeida' },
        { id: 'marco-trentin', name: 'Marco Trentin' },
        { id: 'brandon-mcnulty', name: 'Brandon McNulty' },
        { id: 'mikkel-bjerg', name: 'Mikkel Bjerg' },
        { id: 'nils-politt', name: 'Nils Politt' },
        { id: 'rui-costa', name: 'Rui Costa' }
      ]
    },
    {
      id: 'visma',
      name: 'Visma - Lease a Bike',
      short: 'VLS',
      attaché: 'Camille Moreau',
      riders: [
        { id: 'jonas-vingegaard', name: 'Jonas Vingegaard' },
        { id: 'wout-van-aert', name: 'Wout van Aert' },
        { id: 'sepp-kuss', name: 'Sepp Kuss' },
        { id: 'matteo-jorgenson', name: 'Matteo Jorgenson' },
        { id: 'wilco-kelderman', name: 'Wilco Kelderman' },
        { id: 'tiesj-benoot', name: 'Tiesj Benoot' },
        { id: 'cian-uijtdebroeks', name: 'Cian Uijtdebroeks' },
        { id: 'jan-tratnik', name: 'Jan Tratnik' }
      ]
    },
    {
      id: 'soudal',
      name: 'Soudal - Quick-Step',
      short: 'SOQ',
      attaché: 'Pauline Garnier',
      riders: [
        { id: 'remco-evenepoel', name: 'Remco Evenepoel' },
        { id: 'julian-alaphilippe', name: 'Julian Alaphilippe' },
        { id: 'mauro-schmid', name: 'Mauro Schmid' },
        { id: 'tim-merlier', name: 'Tim Merlier' },
        { id: 'pieter-serry', name: 'Pieter Serry' },
        { id: 'benoit-cosnefroy', name: 'Benoît Cosnefroy' },
        { id: 'louis-vervaeke', name: 'Louis Vervaeke' },
        { id: 'ethan-hayter', name: 'Ethan Hayter' }
      ]
    },
    {
      id: 'ineos',
      name: 'INEOS Grenadiers',
      short: 'IGD',
      attaché: 'Claire Dubois',
      riders: [
        { id: 'tom-pidcock', name: 'Tom Pidcock' },
        { id: 'carlos-rodriguez', name: 'Carlos Rodríguez' },
        { id: 'egan-bernal', name: 'Egan Bernal' },
        { id: 'thymen-arensman', name: 'Thymen Arensman' },
        { id: 'ben-turner', name: 'Ben Turner' },
        { id: 'pavel-sivakov', name: 'Pavel Sivakov' },
        { id: 'joshua-tarling', name: 'Joshua Tarling' },
        { id: 'jonathan-castroviejo', name: 'Jonathan Castroviejo' }
      ]
    }
  ];

  const mediaRequests = [
    { riderId: 'tadej-pogacar', outlets: ['L’Équipe', 'Le Monde', 'Cycling News', 'France Télévisions'] },
    { riderId: 'adam-yates', outlets: ['Le Monde', 'Velo'] },
    { riderId: 'jonas-vingegaard', outlets: ['Cycling News', 'RTBF', 'Le Soir'] },
    { riderId: 'wout-van-aert', outlets: ['L’Équipe', 'RTBF', 'Cycling News'] },
    { riderId: 'remco-evenepoel', outlets: ['L’Équipe', 'Le Monde', 'Cycling News'] },
    { riderId: 'tom-pidcock', outlets: ['France Télévisions', 'Cycling News'] },
    { riderId: 'sepp-kuss', outlets: ['France Télévisions'] },
    { riderId: 'mikkel-bjerg', outlets: [] },
    { riderId: 'mauro-schmid', outlets: [] },
    { riderId: 'tim-merlier', outlets: ['Le Soir'] },
    { riderId: 'carlos-rodriguez', outlets: ['Le Monde'] }
  ];

  global.sharedRaceData = {
    raceName: 'Tour de France 2026',
    raceDate: '2026-07-02',
    stages: [
      { id: 'stage-1', name: 'Étape 1 – Paris / Nice', date: '2026-07-02' },
      { id: 'stage-2', name: 'Étape 2 – Nice / Gap', date: '2026-07-03' },
      { id: 'stage-3', name: 'Étape 3 – Gap / Lyon', date: '2026-07-05' }
    ],
    teams,
    mediaRequests,
    daily: {
      selectionWindow: {
        start: '08:00',
        end: '10:00',
        description: 'Sélection des coureurs par les médias'
      },
      mediaConvocations: {
        start: '11:30',
        end: '12:30',
        description: 'Convocation de l’équipe en interview'
      },
      withdrawals: [
        { id: 'withdrawal-1', riderId: 'rui-costa', riderName: 'Rui Costa', date: '2026-07-02', reason: 'Fièvre' }
      ]
    },
    notifications: [
      { title: 'Météo', message: 'Vent fort sur l’étape 2. Réduire les demandes de leader.' },
      { title: 'Sécurité', message: 'Zone de presse fermée entre 12h10 et 12h40.' }
    ]
  };
})(window);
