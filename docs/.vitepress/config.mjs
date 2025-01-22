import { defineConfig } from 'vitepress';
import deepmerge from 'deepmerge';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import timeline from "vitepress-markdown-timeline";

let mergeConfig = {
    head: []
};

const links = [];

if (process.env.NODE_ENV === 'production') {
    mergeConfig.head = [
        [
            'meta',
            { name: 'google-site-verification', content: 'zxNvFXHnilnwtr39rTNOFwgfG4lsyDevcbXIcC0FZS0' }
        ],
        [
            'meta',
            { name: 'naver-site-verification', content: 'aa33e9f3d99e5091b736c3754f4c9fbbc905a0a7' }
        ],
        [
            'meta',
            { name: 'msvalidate.01', content: 'B4DA8C58849C0563FAE8F91A627C7500' }
        ],
    ]
} else {
    mergeConfig = {
        markdown: {
            lineNumbers: true,
        },
    }
}

export default deepmerge(mergeConfig, defineConfig({
    lang: 'ko-KR',
    titleTemplate: ':title - 신종덕의 포트폴리오',
    description: '사용자가 직접 만드는 그누보드 안내서 ',
    base: '/',
    lastUpdated: true,
    themeConfig: {
        siteTitle: '신종덕의 포트폴리오',
        outline: [2, 4],
        sidebar: {
            '/gnuboard/': [
                {
                    text: '시작하기',
                    items: [
                        { text: '설치', link: '/gnuboard/install' },
                        { text: '초기 설정', link: '/gnuboard/config' },
                        { text: '한 줄 팁', link: '/gnuboard/tip' },
                    ]
                },
                {
                    text: '기본',
                    items: [
                        { text: '회원', link: '/gnuboard/member' },
                        { text: '환경 설정', link: '/gnuboard/basic-config' },
                        { text: '테마와 스킨', link: '/gnuboard/theme-and-skin' },
                        { text: '게시판과 그룹', link: '/gnuboard/board' },
                        { text: '포인트', link: '/gnuboard/point' },
                        { text: '메뉴', link: '/gnuboard/menu' },
                    ]
                },
                {
                    text: '운영 & 관리',
                    items: [
                        { text: '개인정보', link: '/gnuboard/privacy' },
                        { text: '영카트 제거하기', link: '/gnuboard/remove-youngcart' },
                        { text: '업데이트', link: '/gnuboard/upgrade' },
                    ]
                },
            ],
            '/make/': [
                {
                    text: '스킨 만들기',
                    items: [
                        { text: '개요', link: '/make/skin/about' },
                        {
                            text: '게시판 스킨 (board)',
                            link: '/make/skin/board',
                            collapsed: true,
                            items: [
                                { text: '개요', link: '/make/skin/board' },
                                { text: '목록', link: '/make/skin/board/list' },
                                { text: '내용 보기', link: '/make/skin/board/view' },
                                { text: '댓글', link: '/make/skin/board/comment' },
                                { text: '글 쓰기', link: '/make/skin/board/write' },
                                { text: '액션', link: '/make/skin/board/action' },
                            ],
                        },
                        { text: 'Content 스킨 (content)' },
                        { text: 'FAQ 스킨 (faq)' },
                        { text: '회원 스킨 (member)' },
                        { text: '새글 스킨 (new)' },
                        {
                            text: '1:1문의 스킨 (qa)',
                            collapsed: true,
                            items: [
                                { text: '개요' },
                                { text: '목록' },
                                { text: '내용 보기' },
                                { text: '댓글' },
                                { text: '글 쓰기' },
                            ],
                        },
                        { text: '전체검색 스킨 (search)' },
                        { text: '소셜로그인 스킨 (social)' },
                        { text: '접속자 스킨 (visit)' },
                        {
                            text: '위젯',
                            items: [
                                { text: '접속자 스킨 (connect)' },
                                { text: '최신글 스킨 (latest)', link: '/make/skin/latest' },
                                { text: '아웃로그인 스킨 (outlogin)', link: '/make/skin/outlogin' },
                                { text: '설문조사 스킨 (poll)' },
                                { text: '인기검색어 스킨 (popular)' },
                            ],
                        },
                    ],
                },
                {
                    text: '테마 만들기',
                    items: [
                        { text: '개요', link: '/make/theme/about' },
                        { text: '테마 설정', link: '/make/theme/config' },
                        { text: '레이아웃', link: '/make/theme/layout' },
                        { text: '경로 및 URL', link: '/make/theme/path_and_url' },
                        { text: '메뉴 및 위젯', link: '/make/theme/widget' },
                    ],
                },
                {
                    text: '플러그인 만들기',
                    items: [
                        { text: '플러그인', link: '/developers/make_plugin' },
                    ],
                },
            ],
            '/developers/': [
                {
                    text: '개요',
                    items: [
                        { text: '프로젝트 개요', link: '/developers/lifecycle' },
                        { text: '이슈 사항 관리', link: '/developers/config' },
                        { text: '진행 현황', link: '/developers/database' },
                        { text: '향후 계획', link: '/developers/path_and_url' },
                    ]
                },
                {
                    text: '아키텍처',
                    items: [
                        { text: '서버 그룹 구성', link: '/developers/polluted_variables' },
                        { text: '데이터베이스 관리', link: '/developers/file_security' },
                        { text: '생산 관리 모니터링', link: '/developers/sql_injection' },
                        { text: '품질 비전 AI', link: '/developers/token_and_hash' },
                        { text: 'PLC기반 생산 관리', link: '/developers/token_and_hash' },
                    ]
                },
                {
                    text: '서버',
                    items: [
                        { text: 'CRUX 서버 관리', link: '/developers/make_plugin' },
                        { text: 'API 관리', link: '/developers/admin_menu' },
                        { text: 'TCP 소켓 통신 관리', link: '/make/theme/about' },
                        { text: '메세지 브로커 설정', link: '/make/skin' },
                    ]
                },
                {
                    text: '생산관리 모니터링',
                    items: [
                        { text: '시스템 개요', link: '/developers/make_plugin' },
                        { text: '생산 공정 모니터링', link: '/developers/admin_menu' },
                        { text: '품질 검사 모니터링', link: '/make/theme/about' },
                        { text: '실시간 서버 상태', link: '/make/theme/about' },
                    ]
                },
                {
                    text: '품질비전 AI',
                    items: [
                        { text: '시스템 개요', link: '/developers/make_plugin' },
                        { text: 'VisionAI', link: '/developers/admin_menu' },
                        { text: '실시간 데이터 처리 및 통신', link: '/make/theme/about' },
                    ]
                },
                {
                    text: 'PLC 생산관리',
                    items: [
                        { text: '시스템 개요', link: '/developers/make_plugin' },
                        { text: 'PLC 데이터 수집 프로세스', link: '/developers/admin_menu' },
                        { text: '실시간 데이터 처리 및 통신', link: '/make/theme/about' },
                    ]
                },
            ]
        },
        nav: [
            { text: '개요', link: '/gnuboard/install' },
            { text: '아키텍처', link: '/make/skin/about' },
            { text: '서버', link: '/make/theme/about' },
            { text: '생산관리 모니터링', link: '/developers/lifecycle' },
            { text: '품질비전AI', link: '/developers/lifecycle' },
            { text: 'PLC생산관리', link: '/developers/lifecycle' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/g5guide/g5guide.github.io' },
        ],
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/g5guide/g5guide.github.io/edit/main/docs/:path',
            text: '이 페이지 수정하기'
        },
        docFooter: {
            prev: '이전',
            next: '다음'
        },
        footer: {
            message: '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="크리에이티브 커먼즈 라이선스" style="display: inline-block;border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />이 저작물은 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0 국제 라이선스</a>에 따라 이용할 수 있습니다.'
        },
    },
    sitemap: {
        hostname: 'https://g5guide.github.io/',
    },
    transformHtml: (_, id, { pageData }) => {
        if (!/[\\/]404\.html$/.test(id))
            links.push({
                // you might need to change this if not using clean urls mode
                url: pageData.relativePath.replace(/\/index\.md$/, '/').replace(/\.md$/, '.html'),
                lastmod: pageData.lastUpdated
            })
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin);
            md.use(timeline);
        },
    },
}));



