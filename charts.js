// ─── РЕАЛЬНЫЕ ДАННЫЕ ИЗ ПРОЕКТА ───

// Chart 1: Race Pace Box Plot
const paceData = [
    { y: [70.7, 72.0, 77.2, 82.9, 93.6, 95.7, 106.0], type: 'box', name: 'Russell', marker: { color: '#00D2BE' } },
    { y: [70.4, 72.2, 75.7, 82.4, 92.8, 95.5, 105.6], type: 'box', name: 'Antonelli', marker: { color: '#00D2BE' } },
    { y: [70.9, 72.4, 76.6, 82.7, 94.0, 96.2, 119.7], type: 'box', name: 'Hamilton', marker: { color: '#DC0000' } },
    { y: [70.6, 72.6, 76.6, 83.1, 93.5, 96.4, 114.3], type: 'box', name: 'Leclerc', marker: { color: '#DC0000' } }
];

Plotly.newPlot('chart-pace', paceData, {
    title: 'Race Pace Distribution (sec) — 8 Rounds, 2026',
    yaxis: { title: 'Lap Time (sec)', gridcolor: '#2a2a2a' },
    paper_bgcolor: '#141414',
    plot_bgcolor: '#141414',
    font: { color: '#ffffff' },
    margin: { t: 40 }
});

// Chart 2: Degradation by Driver
const degData = [{
    x: ['Russell', 'Antonelli', 'Hamilton', 'Leclerc'],
    y: [-0.047, -0.035, -0.040, -0.025],
    type: 'bar',
    marker: { color: ['#00D2BE', '#00D2BE', '#DC0000', '#DC0000'] },
    name: 'Avg Degradation (sec/lap)',
    text: ['-0.047', '-0.035', '-0.040', '-0.025'],
    textposition: 'outside',
    textfont: { color: '#ffffff' }
}];

Plotly.newPlot('chart-deg', degData, {
    title: 'Average Tyre Degradation (sec/lap) — Lower is Better',
    yaxis: { title: 'Degradation (sec/lap)', gridcolor: '#2a2a2a' },
    paper_bgcolor: '#141414',
    plot_bgcolor: '#141414',
    font: { color: '#ffffff' },
    margin: { t: 40 }
});

// Chart 3: Team Comparison
const teamData = [{
    x: ['Mercedes', 'Ferrari'],
    y: [-0.041, -0.033],
    type: 'bar',
    marker: { color: ['#00D2BE', '#DC0000'] },
    name: 'Avg Degradation (sec/lap)',
    text: ['-0.041', '-0.033'],
    textposition: 'outside',
    textfont: { color: '#ffffff' }
}];

Plotly.newPlot('chart-team', teamData, {
    title: 'Team Tyre Degradation — Mercedes vs Ferrari',
    yaxis: { title: 'Degradation (sec/lap)', gridcolor: '#2a2a2a' },
    paper_bgcolor: '#141414',
    plot_bgcolor: '#141414',
    font: { color: '#ffffff' },
    margin: { t: 40 }
});

// Chart 4: Speed Trace (замени на данные из второй ячейки, когда выполнишь)
const distance = [11, 45, 66, 90, 112, 137, 173, 195, 213, 228, 273, 292, 311, 352, 371, 390, 416, 435, 469, 496];
const rusSpeed = [301, 307, 313, 316, 319, 323, 327, 329, 331, 332, 336, 337, 338, 339, 340, 340, 340, 340, 340, 340];
const antSpeed = [296, 302, 309, 315, 319, 326, 328, 331, 334, 335, 336, 338, 339, 339, 339, 339, 339, 339, 336, 334];

Plotly.newPlot('chart-speed', [
    { x: distance, y: rusSpeed, type: 'scatter', mode: 'lines', name: 'Russell', line: { color: '#00D2BE', width: 2.5 } },
    { x: distance, y: antSpeed, type: 'scatter', mode: 'lines', name: 'Antonelli', line: { color: '#DC0000', width: 2.5, dash: 'dot' } }
], {
    title: 'Speed Trace — Barcelona 2026 Q (first 20 data points)',
    xaxis: { title: 'Distance (m)', gridcolor: '#2a2a2a' },
    yaxis: { title: 'Speed (km/h)', gridcolor: '#2a2a2a' },
    paper_bgcolor: '#141414',
    plot_bgcolor: '#141414',
    font: { color: '#ffffff' },
    margin: { t: 40 },
    legend: { orientation: 'h', y: 1.1 }
});