document.addEventListener("DOMContentLoaded", function () {
    const batteryPercentage = document.createElement('div');
    batteryPercentage.classList.add('battery-percentage');

    navigator.getBattery().then(function (battery) {
        function updateBatteryStatus() {
            const percentage = (battery.level * 100).toFixed();
            batteryPercentage.innerText = ` ${percentage}%`;
        }

        updateBatteryStatus();

        battery.addEventListener('levelchange', updateBatteryStatus);
        battery.addEventListener('chargingchange', updateBatteryStatus);

        document.body.appendChild(batteryPercentage);
    });
});
