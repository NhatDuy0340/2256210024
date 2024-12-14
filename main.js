document.getElementById('predict-button').addEventListener('click', function () {
    const stockCode = document.getElementById('stock-code').value.trim().toUpperCase();
    const forecastMethod = document.getElementById('forecast-method').value;

    const resultDiv = document.getElementById('result');

    // Làm sạch nội dung cũ
    resultDiv.innerHTML = '';

    // Kiểm tra đầu vào
    if (!stockCode) {
        alert('Vui lòng nhập mã cổ phiếu!');
        return;
    }

    if (!forecastMethod) {
        alert('Vui lòng chọn kỹ thuật dự báo!');
        return;
    }

    // Dữ liệu đường dẫn hình ảnh
    const images = {
        MSFT: {
            moving_average_naive: 'Images/moving_average_naive.png',
            moving_average_3step: 'Images/moving_average_3step.png',
            moving_average_6step: 'Images/moving_average_6step.png',
            exponential_smoothing: 'Images/exponential_smoothing.png',
            holt: 'Images/Holt.png',
            holt_winters: 'Images/Holt_winters.png',
        }
    };

    // Kiểm tra và hiển thị hình ảnh nếu tồn tại
    if (images[stockCode] && images[stockCode][forecastMethod]) {
        const imagePath = images[stockCode][forecastMethod];
        resultDiv.innerHTML = `
            <div class="text-center">
                <h5>Dự báo giá cổ phiếu ${stockCode} với kỹ thuật ${forecastMethod.replace(/_/g, ' ')}</h5>
                <img src="${imagePath}" alt="Dự báo giá ${stockCode}" class="img-fluid" />
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="alert alert-warning text-center">
                Không tìm thấy kết quả cho mã cổ phiếu ${stockCode} với phương pháp ${forecastMethod}.
            </div>
        `;
    }
});
