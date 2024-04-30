const extend = document.getElementById('extend');
    const home = document.getElementById('home');
    const jobs = document.getElementById('jobs');
    const addJobs = document.getElementById('add_jobs');

    extend.addEventListener('click', () => {
        home.classList.toggle('inline-block');
        jobs.classList.toggle('inline-block');
        addJobs.classList.toggle('inline-block');
    });