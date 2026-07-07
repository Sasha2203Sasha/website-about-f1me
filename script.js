/ ─── Дашборд с реальными данными ───/

function updateDashboard() {
    const selected = Array.from(document.getElementById('driver-select').selectedOptions).map(o => o.value);

    // Реальные данные из проекта
    const medians = {
        'ANT': 82.4170,
        'HAM': 82.6800,
        'LEC': 83.0915,
        'RUS': 82.8630,
    };
    const mins = {
        'RUS': 70.683,
        'ANT': 70.374,
        'HAM': 70.946,
        'LEC': 70.606
    };
    const maxs = {
        'RUS': 105.973,
        'ANT': 105.601,
        'HAM': 119.696,
        'LEC': 114.337
    };

    // График 1: Бокс-плот темпа
    const trace1 = {
        x: selected,
        y: selected.map(d => medians[d]),
        type: 'bar',
        name: 'Median',
        marker: { color: '#00D2BE' },
        error_y: {
            type: 'data',
            symmetric: false,
            array: selected.map(d => maxs[d] - medians[d]),
            arrayminus: selected.map(d => medians[d] - mins[d]),
            color: '#ffffff'
        }
    };

    Plotly.newPlot('plot-pace', [trace1], {
        title: 'Race Pace (median & spread)',
        yaxis: { title: 'Lap Time (seconds)', gridcolor: '#2a2a2a' },
        paper_bgcolor: '#141414',
        plot_bgcolor: '#141414',
        font: { color: '#ffffff' },
        margin: { t: 40 }
    });

    // График 2: Деградация
    const degData = {
        'RUS': [0.1652, -0.0993, -0.1419],
        'ANT': [0.1965, -0.2298, -0.0182],
        'HAM': [0.1863, -0.1249, -0.0433],
        'LEC': [0.2373, -0.2068, 0.0338]
    };

    const trace2 = selected.map(d => ({
        y: degData[d],
        type: 'box',
        name: d,
        marker: { color: d === 'RUS' || d === 'ANT' ? '#00D2BE' : '#DC0000' }
    }));

    Plotly.newPlot('plot-deg', trace2, {
        title: 'Tyre Degradation (sec/lap)',
        yaxis: { title: 'Degradation (sec/lap)', gridcolor: '#2a2a2a' },
        paper_bgcolor: '#141414',
        plot_bgcolor: '#141414',
        font: { color: '#ffffff' },
        margin: { t: 40 }
    });
}

window.onload = updateDashboard;