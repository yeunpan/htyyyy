document.getElementById('generate-btn').addEventListener('click', function() {
    generateLottoNumbers();
});

function generateLottoNumbers() {
    // SweetAlert2로 로딩 중 메시지 표시
    Swal.fire({
        title: '번호 추첨 중입니다...',
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    // setTimeout을 사용하여 로또 번호 생성 시뮬레이션
    setTimeout(function() {
        // 초기화
        const lottoNumbersElement = document.getElementById('lotto-numbers');
        lottoNumbersElement.innerHTML = '';

        // 로또 번호 생성 (1부터 45까지 중복 없이 6개 숫자 생성)
        let numbers = [];
        while (numbers.length < 6) {
            let randomNumber = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }

        // 생성된 번호를 정렬
        numbers.sort(function(a, b) {
            return a - b;
        });

        // SweetAlert2 닫기
        Swal.close();

        // 생성된 번호를 화면에 출력
        numbers.forEach(function(number) {
            const li = document.createElement('li');
            li.textContent = number;
            li.classList.add('text-center', 'text-xl', 'bg-gray-200', 'rounded-lg', 'py-2');
            lottoNumbersElement.appendChild(li);
        });

        // SweetAlert2로 번호 출력 완료 메시지 표시
        Swal.fire({
            icon: 'success',
            title: '로또 번호 생성 완료!',
            showConfirmButton: false,
            timer: 1500
        });
    }, 2000); // 2초 후에 번호 생성
}
