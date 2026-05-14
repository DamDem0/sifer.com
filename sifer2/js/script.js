const mangaData = {
    onepiece: {
        title: 'One Piece',
        altTitle: 'ワンピース',
        emoji: '🏴‍☠️',
        gradient: 'linear-gradient(135deg,#ff6b6b,#fdcb6e)',
        desc: 'Follow Monkey D. Luffy and his swashbuckling crew.',
        tags: ['Ongoing','Action','Adventure'],
        rating: '4.9',
        chapters: '1,100+',
        year: '1997',
        update: 'Weekly',
        latestChapter: 1089
    },

    jujutsu: {
        title: 'Jujutsu Kaisen',
        altTitle: '呪術廻戦',
        emoji: '👹',
        gradient: 'linear-gradient(135deg,#6c5ce7,#a29bfe)',
        desc: 'Yuji Itadori becomes involved in the world of curses.',
        tags: ['Ongoing','Action','Dark Fantasy'],
        rating: '4.8',
        chapters: '236',
        year: '2018',
        update: 'Weekly',
        latestChapter: 236
    }
};

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    const pageMap = {
        home: 'home-page',
        latest: 'latest-page',
        popular: 'popular-page',
        bookmarks: 'bookmarks-page'
    };

    const targetPage =
        document.getElementById(pageMap[pageName]);

    if (targetPage) {
        targetPage.classList.add('active');
    }

    window.scrollTo(0, 0);
}

function showMangaDetail(mangaId) {
    const data = mangaData[mangaId];

    if (!data) return;

    document.querySelectorAll('.page')
        .forEach(p => p.classList.remove('active'));

    document.getElementById('detail-page')
        .classList.add('active');

    document.getElementById('detail-title')
        .textContent = data.title;

    document.getElementById('detail-alt')
        .textContent = data.altTitle;

    document.getElementById('detail-desc')
        .textContent = data.desc;
}

function openReader(mangaId, chapter) {
    const data = mangaData[mangaId];

    if (!data) return;

    document.getElementById('reader-title')
        .textContent =
        `${data.title} - Chapter ${chapter}`;

    document.getElementById('reader-page')
        .classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeReader() {
    document.getElementById('reader-page')
        .classList.remove('active');

    document.body.style.overflow = '';
}

document.querySelectorAll('.filter-btn')
.forEach(btn => {
    btn.addEventListener('click', function () {

        const parent =
            this.closest('.section-actions');

        if (parent) {
            parent.querySelectorAll('.filter-btn')
                .forEach(b =>
                    b.classList.remove('active'));

            this.classList.add('active');
        }
    });
});

document.getElementById('searchInput')
.addEventListener('input', function (e) {

    const query =
        e.target.value.toLowerCase();

    document.querySelectorAll('.manga-card')
    .forEach(card => {

        const titleEl =
            card.querySelector('.manga-title');

        if (!titleEl) return;

        const title =
            titleEl.textContent.toLowerCase();

        card.style.display =
            title.includes(query)
                ? 'block'
                : 'none';
    });
});