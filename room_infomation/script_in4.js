document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.room-filter');
    const rooms = document.querySelectorAll('.room-card');
    const roomGrid = document.querySelector('.room-grid');

    // Tạo phần tử thông báo
    const noRoomsMessage = document.createElement('div');
    noRoomsMessage.style.cssText = `
        display: none;
        text-align: center;
        width: 100%;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
        margin: 20px 0;
        font-size: 16px;
        color: #6c757d;
    `;
    noRoomsMessage.textContent = 'Không tìm thấy phòng phù hợp với tiêu chí bạn chọn!';
    roomGrid.appendChild(noRoomsMessage);

    function updateRoomVisibility() {
        const selectedFilters = Array.from(filters)
            .filter(filter => filter.checked)
            .map(filter => filter.dataset.type);

        if (selectedFilters.length === 0) {
            rooms.forEach(room => room.classList.remove('hidden'));
            noRoomsMessage.style.display = 'none';
            return;
        }

        let visibleRoomsCount = 0;

        rooms.forEach(room => {
            const roomType = room.dataset.roomType;
            if (selectedFilters.includes(roomType)) {
                room.classList.remove('hidden');
                visibleRoomsCount++;
            } else {
                room.classList.add('hidden');
            }
        });

        // Hiển thị hoặc ẩn thông báo dựa trên số phòng hiển thị
        if (visibleRoomsCount === 0) {
            noRoomsMessage.style.display = 'block';
        } else {
            noRoomsMessage.style.display = 'none';
        }
    }

    filters.forEach(filter => {
        filter.addEventListener('change', updateRoomVisibility);
    });
});