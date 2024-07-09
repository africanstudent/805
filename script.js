document.addEventListener('DOMContentLoaded', () => {
    const models = [
        '11', '11 Pro', '11 Pro Max', '12', '12 Mini', '12 Pro', '12 Pro Max', 
        '13', '13 Mini', '13 Pro', '13 Pro Max', '14', '14 Mini', '14 Pro', 
        '14 Pro Max', '15', '15 Plus', '15 Pro', '15 Pro Max'
    ];

    const basePrices = {
        audio: 20000,
        network: 35000,
        battery: 100000,
        screen: 150000,
        water: 200000
    };

    const modelContainer = document.getElementById('models');
    const quotationsContainer = document.getElementById('quotations');

    models.forEach((model, index) => {
        const button = document.createElement('button');
        button.textContent = `iPhone ${model}`;
        button.addEventListener('click', () => displayPrices(index));
        modelContainer.appendChild(button);
    });

    function displayPrices(index) {
        const prices = {
            audio: basePrices.audio + index * 5500,
            network: basePrices.network + index * 5000,
            battery: basePrices.battery + index * 9950,
            screen: basePrices.screen + index * 45500,
            water: basePrices.water + index * 45500
        };

        quotationsContainer.innerHTML = `
            <h3>Price Quotations for iPhone ${models[index]}</h3>
            <ul>
                <li>Audio Issues: Ugx.${prices.audio}</li>
                <li>Network Issues: Ugx.${prices.network}</li>
                <li>Battery Replacement: Ugx.${prices.battery}</li>
                <li>Screen Replacement: Ugx.${prices.screen}</li>
                <li>Water Damage: Ugx.${prices.water}</li>
                <li>Complex Issues: <input type="text" id="complex-issues" placeholder="Describe the issue">
                <button onclick="sendComplexIssue(${index})">Submit</button></li>
            </ul>
        `;
    }

    window.sendComplexIssue = function(index) {
        const issue = document.getElementById('complex-issues').value;
        alert(`Complex issue for iPhone ${models[index]}: ${issue}`);
        // Here you would send the issue to the database
    }
    
    // Login handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication check
            if (username === 'admin' && password === 'admin123') {
                window.location.href = 'admin.html';
            } else if (username === 'user' && password === 'user123') {
                window.location.href = 'user.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }
});
