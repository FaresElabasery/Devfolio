const portfolioContainer = document.querySelector('#portfolioContainer');
const carouselInner = document.querySelector('.carousel-inner');
const portfolioData = [
    {
        img: './images/work-1.jpg',
        title: 'Lorem impsum dolor',
        category: 'Web Design',
        date: '18 Sep 2018'
    },
    {
        img: './images/work-2.jpg',
        title: 'Loreda Cuno Nere',
        category: 'Web Design',
        date: '18 Sep 2018'
    },
    {
        img: './images/work-3.jpg',
        title: 'Mavrito Lana Dere',
        category: 'Web Design',
        date: '18 Sep 2018'
    },
    {
        img: './images/work-4.jpg',
        title: 'Bindo Laro Cado',
        category: 'Web Design',
        date: '18 Sep 2018'
    },
    {
        img: './images/work-5.jpg',
        title: 'Studio Lena Mado',
        category: 'Web Design',
        date: '18 Sep 2018'
    },
    {
        img: './images/work-6.jpg',
        title: 'Studio Big Bang',
        category: 'Web Design',
        date: '18 Sep 2018'
    }
];
export function displayPortfolio() {
    let cartona = ''
    portfolioData.forEach((data, index) => {
        cartona += `<div class="col-md-4 " data-index="${index}">
                        <div class="inner bg-white shadow-sm">
                            <div class="img-container overflow-hidden">
                                <img src="${data.img}" alt="${data.title}" class="w-100 " data-bs-toggle="modal"
                                    data-bs-target="#portfolioImg1">
                            </div>
                            <div class="card-info p-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 class="fw-medium">Lorem impsum dolor</h5>
                                    <p class="fs-7"><span class="text-primary">${data.category} </span> / ${data.date}</p>
                                </div>
                                <div class="icon-container bg-transparent border-3 ">
                                    <i class="fa-solid fa-plus bg-transparent text-primary fs-3 "></i>
                                </div>
                            </div>
                        </div>
                    </div>`
    });
    portfolioContainer.innerHTML = cartona;
    portfolioContainer.querySelectorAll('[data-index]').forEach((item, i) => {
        item.addEventListener('click', (e) => {
            carouselInner.innerHTML = '';
            console.log(e.currentTarget.dataset.index, i);
            portfolioData.forEach((data, index) => {
                carouselInner.innerHTML += `
                    <div class="carousel-item ${e.currentTarget.dataset.index == index ? 'active' : ''} ">
                        <img src="${data.img}" class="d-block w-100" alt="${data.title}">
                    </div>
                    `
            })
        })
    })
}
