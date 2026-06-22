function calculateFootprint() {
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const travel = parseFloat(document.getElementById("travel").value) || 0;
    const phone = parseFloat(document.getElementById("phone").value) || 0;
    const laptop = parseFloat(document.getElementById("laptop").value) || 0;
    
    const co2Electricity = electricity * 0.5;  // kg CO2/kWh
    const co2Travel = travel * 0.21;          // kg CO2/km (car avg)
    const co2Phone = phone * 0.015 * 30;      // monthly estimate
    const co2Laptop = laptop * 0.05 * 30;
  
    const totalCO2 = co2Electricity + co2Travel + co2Phone + co2Laptop;
  
    document.getElementById("result").innerText = 
      `Your estimated monthly carbon footprint is ${totalCO2.toFixed(2)} kg of CO₂`;
  
    const ctx = document.getElementById('carbonChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Electricity', 'Travel', 'Phone', 'Laptop'],
        datasets: [{
          label: 'CO₂ Emissions (kg)',
          data: [co2Electricity, co2Travel, co2Phone, co2Laptop],
          backgroundColor: ['#4caf50', '#8bc34a', '#cddc39', '#ffeb3b']
        }]
      }
    });
  }
  