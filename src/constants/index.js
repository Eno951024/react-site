import otr_01 from "../assets/img/otr_01.jpeg";
import otr_02 from "../assets/img/otr_02.jpeg";
import otr_03 from "../assets/img/otr_03.jpeg";
import otr_04 from "../assets/img/otr_04.jpeg";
import otr_05 from "../assets/img/otr_05.jpeg";

import { Github, Send } from 'lucide-react';

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "mindset",
        url: "#mindset"
    },
    {
        title: "work",
        url: "#work"
    },
    {
        title: "Off the Record",
        url: "#otr"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    desc: ["sorry", "i am", "engineer"]
}

export const mindsetText = [
    {
        title: "オーナーシップを持って",
        desc: "自身が手掛ける仕事はすべて「会社の成果物」である前に、まず「自分の作品」であると考えています。この想いが、開発者の視点に留まらず、ユーザー視点に立ち返って完成度を追求する原動力です。"
    },
    {
        title: "自分自身に正直であること",
        desc: "誠実であるべき最も重要な対象は、他人ではなく自分自身です。自分に誠実であるほど、目指すべき道が明確になり、その目標が情熱の方向と深みを根底から変えてくれると信じています。"
    },
    {
        title: "成長し続ける責任感",
        desc: "「昨日より優れた今日を、今日より成長した明日を」が私の信条です。この想いが、いかなる困難な課題にも臆することなく、必ず期限内に解決策を導き出すという強い責任感を支えています。"
    }
]

export const workText = [
    {
        title: "VUEを利用したサイト作り",
        code: "https://github.com/Eno951024/vue",
        view: "https://sonhyon-ho-vue.netlify.app/",
    },
    {
        title: "Reactを利用したサイト作り",
        code: "https://github.com/Eno951024/react-site",
        view: "https://sonhyon-ho-react.netlify.app/",
    },
    {
        title: "ゲーム紹介公式サイト製造",
        view: "https://nogikoi.jp/",
    },
];

export const otrText = [
    {
        title: "ライブ参加",
        desc: "2/2.5/3次元,次元を問わず多様に楽しみます。",
        img: otr_01,
    },
    {
        title: "スポーツ活動",
        desc: "アーチェリー、キックボックシング、BJJなど色々なスポーツを楽しんでいます。",
        img: otr_02,
    },
    {
        title: "各種イベント参加",
        desc: "コミケやTGS、超会議など様々なイベントに参加します",
        img: otr_03,
    },
    {
        title: "料理",
        desc: "食べてみたい料理があったら直接作ります。",
        img: otr_04,
    },
    {
        title: "オタ活",
        desc: "展示会やフェス、ポップアップなどを見に行きます。",
        img: otr_05,
    },
];

export const contactText = [
    {
        link: "https://line.me/ti/p/0HDyX0g8Z1",
        title: "line : cal8352",
    },
    {
        link: "mailto:kamo8352@gmail.com",
        title: "mail : kamo8352@gmail.com",
    },
];

export const socialLinks = [
    {
        icon: Github,
        link: "https://github.com/Eno951024",
    },
    {
        icon: Send,
        link: "mailto:kamo8352@gmail.com",
    },
];