import { displayPortfolio } from "./portfolio.js";

const backTop = document.querySelector('.back-top');
const home = document.getElementById('home');
const serviceRow = document.getElementById('serviceRow');
const serviceData = [{
    iconClass: 'fa-solid fa-briefcase',
    title: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
},
{
    iconClass: 'fa-solid fa-list-check',
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
},
{
    iconClass: 'fa-solid fa-chart-simple',
    title: 'Photography',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
},
{
    iconClass: 'fa-solid fa-binoculars',
    title: 'Responsive Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
},
{
    iconClass: 'fa-solid fa-sun',
    title: 'Graphic Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
},
{
    iconClass: 'fa-solid fa-calendar-days',
    title: 'Marketing Services',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.'
}];
var serviceHTML = '';
serviceData.forEach(function (service) {
    serviceHTML += `
                <div class="col-12 col-lg-4 ">
                    <div class="service-card text-center p-4 shadow-sm bg-white rounded-4">
                        <div class="icon-container m-auto mb-3">
                            <i class="${service.iconClass} fa-2xl"></i>
                        </div>
                        <div class="service-content">
                            <h3 class="fw-semibold fs-4 text-uppercase">${service.title}</h3>
                            <p class="text-light-emphasis">${service.desc}</p>
                        </div>
                    </div>
                </div>
    `;
    serviceRow.innerHTML = serviceHTML;
});
displayPortfolio();

// back to top button


if (home && backTop) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio === 1) {
                    backTop.classList.add('hide-btn'); // يخفي الزر لما الهوم ظاهر بالكامل
                } else {
                    backTop.classList.remove('hide-btn'); // يظهر الزر أول ما الهوم يختفي
                }
            });
        },
        { threshold: 1 }
    );
    observer.observe(home);
}
