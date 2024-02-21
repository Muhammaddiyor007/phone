
    const cameraButton = document.querySelector(".app-icon.camera");
    
    cameraButton.addEventListener("click", async () => {
        try {
            // Kamera olish
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            
            // Kamera oynasini olish
            const video = document.createElement("video");
            video.srcObject = stream;
            video.autoplay = true;
            
            // Oynani ko'rsatish
            const cameraContainer = document.createElement("div");
            cameraContainer.appendChild(video);
            document.body.appendChild(cameraContainer);
            
            // Kamera oynasini yopish uchun tugma
            const closeCameraButton = document.createElement("button");
            closeCameraButton.innerText = "Close Camera";
            closeCameraButton.addEventListener("click", () => {
                stream.getTracks().forEach(track => track.stop());
                cameraContainer.remove();
            });
            
            // Oynani yopish tugmasini oynaga qo'shish
            cameraContainer.appendChild(closeCameraButton);
        } catch (error) {
            console.error("Xatolik: Kamera aniqlanmadi yoki foydalanuvchining ruxsatini so'ray olmoqda.");
        }
    });

