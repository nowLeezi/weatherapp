// OpenWeather API 설정
const API_KEY = '45037202c324c1693448a2e1a9c3c80a'; // 실제 API 키로 교체해야 합니다
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// 한국 지역구별 데이터
const koreanRegions = {
    // 서울특별시
    '강남구': { city: 'Seoul', region: 'Gangnam-gu' },
    '강동구': { city: 'Seoul', region: 'Gangdong-gu' },
    '강북구': { city: 'Seoul', region: 'Gangbuk-gu' },
    '강서구': { city: 'Seoul', region: 'Gangseo-gu' },
    '관악구': { city: 'Seoul', region: 'Gwanak-gu' },
    '광진구': { city: 'Seoul', region: 'Gwangjin-gu' },
    '구로구': { city: 'Seoul', region: 'Guro-gu' },
    '금천구': { city: 'Seoul', region: 'Geumcheon-gu' },
    '노원구': { city: 'Seoul', region: 'Nowon-gu' },
    '도봉구': { city: 'Seoul', region: 'Dobong-gu' },
    '동대문구': { city: 'Seoul', region: 'Dongdaemun-gu' },
    '동작구': { city: 'Seoul', region: 'Dongjak-gu' },
    '마포구': { city: 'Seoul', region: 'Mapo-gu' },
    '서대문구': { city: 'Seoul', region: 'Seodaemun-gu' },
    '서초구': { city: 'Seoul', region: 'Seocho-gu' },
    '성동구': { city: 'Seoul', region: 'Seongdong-gu' },
    '성북구': { city: 'Seoul', region: 'Seongbuk-gu' },
    '송파구': { city: 'Seoul', region: 'Songpa-gu' },
    '양천구': { city: 'Seoul', region: 'Yangcheon-gu' },
    '영등포구': { city: 'Seoul', region: 'Yeongdeungpo-gu' },
    '용산구': { city: 'Seoul', region: 'Yongsan-gu' },
    '은평구': { city: 'Seoul', region: 'Eunpyeong-gu' },
    '종로구': { city: 'Seoul', region: 'Jongno-gu' },
    '중구': { city: 'Seoul', region: 'Jung-gu' },
    '중랑구': { city: 'Seoul', region: 'Jungnang-gu' },

    // 부산광역시
    '부산강서구': { city: 'Busan', region: 'Gangseo-gu' },
    '부산금정구': { city: 'Busan', region: 'Geumjeong-gu' },
    '부산남구': { city: 'Busan', region: 'Nam-gu' },
    '부산동구': { city: 'Busan', region: 'Dong-gu' },
    '부산동래구': { city: 'Busan', region: 'Dongnae-gu' },
    '부산진구': { city: 'Busan', region: 'Busanjin-gu' },
    '부산북구': { city: 'Busan', region: 'Buk-gu' },
    '부산사상구': { city: 'Busan', region: 'Sasang-gu' },
    '부산사하구': { city: 'Busan', region: 'Saha-gu' },
    '부산서구': { city: 'Busan', region: 'Seo-gu' },
    '부산수영구': { city: 'Busan', region: 'Suyeong-gu' },
    '부산연제구': { city: 'Busan', region: 'Yeonje-gu' },
    '부산영도구': { city: 'Busan', region: 'Yeongdo-gu' },
    '부산중구': { city: 'Busan', region: 'Jung-gu' },
    '부산해운대구': { city: 'Busan', region: 'Haeundae-gu' },
    '기장군': { city: 'Busan', region: 'Gijang-gun' },

    // 대구광역시
    '대구남구': { city: 'Daegu', region: 'Nam-gu' },
    '대구달서구': { city: 'Daegu', region: 'Dalseo-gu' },
    '달성군': { city: 'Daegu', region: 'Dalseong-gun' },
    '대구동구': { city: 'Daegu', region: 'Dong-gu' },
    '대구북구': { city: 'Daegu', region: 'Buk-gu' },
    '대구서구': { city: 'Daegu', region: 'Seo-gu' },
    '대구수성구': { city: 'Daegu', region: 'Suseong-gu' },
    '대구중구': { city: 'Daegu', region: 'Jung-gu' },

    // 인천광역시
    '계양구': { city: 'Incheon', region: 'Gyeeyang-gu' },
    '인천남구': { city: 'Incheon', region: 'Nam-gu' },
    '남동구': { city: 'Incheon', region: 'Namdong-gu' },
    '인천동구': { city: 'Incheon', region: 'Dong-gu' },
    '부평구': { city: 'Incheon', region: 'Bupyeong-gu' },
    '인천서구': { city: 'Incheon', region: 'Seo-gu' },
    '연수구': { city: 'Incheon', region: 'Yeonsu-gu' },
    '인천중구': { city: 'Incheon', region: 'Jung-gu' },
    '강화군': { city: 'Incheon', region: 'Ganghwa-gun' },
    '옹진군': { city: 'Incheon', region: 'Ongjin-gun' },

    // 광주광역시
    '광산구': { city: 'Gwangju', region: 'Gwangsan-gu' },
    '광주남구': { city: 'Gwangju', region: 'Nam-gu' },
    '광주동구': { city: 'Gwangju', region: 'Dong-gu' },
    '광주북구': { city: 'Gwangju', region: 'Buk-gu' },
    '광주서구': { city: 'Gwangju', region: 'Seo-gu' },

    // 대전광역시
    '대덕구': { city: 'Daejeon', region: 'Daedeok-gu' },
    '대전동구': { city: 'Daejeon', region: 'Dong-gu' },
    '대전서구': { city: 'Daejeon', region: 'Seo-gu' },
    '유성구': { city: 'Daejeon', region: 'Yuseong-gu' },
    '대전중구': { city: 'Daejeon', region: 'Jung-gu' },

    // 울산광역시
    '울산남구': { city: 'Ulsan', region: 'Nam-gu' },
    '울산동구': { city: 'Ulsan', region: 'Dong-gu' },
    '울산북구': { city: 'Ulsan', region: 'Buk-gu' },
    '울주군': { city: 'Ulsan', region: 'Ulju-gun' },
    '울산중구': { city: 'Ulsan', region: 'Jung-gu' },

    // 경기도 주요 지역
    '수원시': { city: 'Suwon', region: 'Suwon' },
    '고양시': { city: 'Goyang', region: 'Goyang' },
    '용인시': { city: 'Yongin', region: 'Yongin' },
    '성남시': { city: 'Seongnam', region: 'Seongnam' },
    '부천시': { city: 'Bucheon', region: 'Bucheon' },
    '안산시': { city: 'Ansan', region: 'Ansan' },
    '안양시': { city: 'Anyang', region: 'Anyang' },
    '평택시': { city: 'Pyeongtaek', region: 'Pyeongtaek' },
    '시흥시': { city: 'Siheung', region: 'Siheung' },
    '김포시': { city: 'Gimpo', region: 'Gimpo' },
    '광명시': { city: 'Gwacheon', region: 'Gwacheon' },
    '군포시': { city: 'Gunpo', region: 'Gunpo' },
    '오산시': { city: 'Osan', region: 'Osan' },
    '의왕시': { city: 'Uiwang', region: 'Uiwang' },
    '하남시': { city: 'Hanam', region: 'Hanam' },
    '이천시': { city: 'Icheon', region: 'Icheon' },
    '안성시': { city: 'Anseong', region: 'Anseong' },
    '포천시': { city: 'Pocheon', region: 'Pocheon' },
    '여주시': { city: 'Yeoju', region: 'Yeoju' },
    '양평군': { city: 'Yangpyeong', region: 'Yangpyeong' },
    '과천시': { city: 'Gwacheon', region: 'Gwacheon' },
    '구리시': { city: 'Guri', region: 'Guri' },
    '남양주시': { city: 'Namyangju', region: 'Namyangju' },
    '파주시': { city: 'Paju', region: 'Paju' },
    '양주시': { city: 'Yangju', region: 'Yangju' },
    '동두천시': { city: 'Dongducheon', region: 'Dongducheon' },
    '가평군': { city: 'Gapyeong', region: 'Gapyeong' },
    '연천군': { city: 'Yeoncheon', region: 'Yeoncheon' },

    // 강원도 주요 지역
    '춘천시': { city: 'Chuncheon', region: 'Chuncheon' },
    '원주시': { city: 'Wonju', region: 'Wonju' },
    '강릉시': { city: 'Gangneung', region: 'Gangneung' },
    '태백시': { city: 'Taebaek', region: 'Taebaek' },
    '속초시': { city: 'Sokcho', region: 'Sokcho' },
    '삼척시': { city: 'Samcheok', region: 'Samcheok' },
    '동해시': { city: 'Donghae', region: 'Donghae' },
    '정선군': { city: 'Jeongseon', region: 'Jeongseon' },
    '영월군': { city: 'Yeongwol', region: 'Yeongwol' },
    '평창군': { city: 'Pyeongchang', region: 'Pyeongchang' },
    '횡성군': { city: 'Hoengseong', region: 'Hoengseong' },
    '화천군': { city: 'Hwacheon', region: 'Hwacheon' },
    '양구군': { city: 'Yanggu', region: 'Yanggu' },
    '인제군': { city: 'Inje', region: 'Inje' },
    '고성군': { city: 'Goseong', region: 'Goseong' },
    '양양군': { city: 'Yangyang', region: 'Yangyang' },
    '철원군': { city: 'Cheorwon', region: 'Cheorwon' },

    // 충청북도 주요 지역
    '청주시': { city: 'Cheongju', region: 'Cheongju' },
    '충주시': { city: 'Chungju', region: 'Chungju' },
    '제천시': { city: 'Jecheon', region: 'Jecheon' },
    '보은군': { city: 'Boeun', region: 'Boeun' },
    '옥천군': { city: 'Okcheon', region: 'Okcheon' },
    '영동군': { city: 'Yeongdong', region: 'Yeongdong' },
    '증평군': { city: 'Jeungpyeong', region: 'Jeungpyeong' },
    '진천군': { city: 'Jincheon', region: 'Jincheon' },
    '괴산군': { city: 'Goesan', region: 'Goesan' },
    '음성군': { city: 'Eumseong', region: 'Eumseong' },
    '단양군': { city: 'Danyang', region: 'Danyang' },

    // 충청남도 주요 지역
    '천안시': { city: 'Cheonan', region: 'Cheonan' },
    '공주시': { city: 'Gongju', region: 'Gongju' },
    '보령시': { city: 'Boryeong', region: 'Boryeong' },
    '아산시': { city: 'Asan', region: 'Asan' },
    '서산시': { city: 'Seosan', region: 'Seosan' },
    '논산시': { city: 'Nonsan', region: 'Nonsan' },
    '계룡시': { city: 'Gyeryong', region: 'Gyeryong' },
    '당진시': { city: 'Dangjin', region: 'Dangjin' },
    '금산군': { city: 'Geumsan', region: 'Geumsan' },
    '부여군': { city: 'Buyeo', region: 'Buyeo' },
    '서천군': { city: 'Seocheon', region: 'Seocheon' },
    '청양군': { city: 'Cheongyang', region: 'Cheongyang' },
    '홍성군': { city: 'Hongseong', region: 'Hongseong' },
    '예산군': { city: 'Yesan', region: 'Yesan' },
    '태안군': { city: 'Taean', region: 'Taean' },

    // 전라북도 주요 지역
    '전주시': { city: 'Jeonju', region: 'Jeonju' },
    '군산시': { city: 'Gunsan', region: 'Gunsan' },
    '익산시': { city: 'Iksan', region: 'Iksan' },
    '정읍시': { city: 'Jeongeup', region: 'Jeongeup' },
    '남원시': { city: 'Namwon', region: 'Namwon' },
    '김제시': { city: 'Gimje', region: 'Gimje' },
    '완주군': { city: 'Wanju', region: 'Wanju' },
    '진안군': { city: 'Jinan', region: 'Jinan' },
    '무주군': { city: 'Muju', region: 'Muju' },
    '장수군': { city: 'Jangsu', region: 'Jangsu' },
    '임실군': { city: 'Imsil', region: 'Imsil' },
    '순창군': { city: 'Sunchang', region: 'Sunchang' },
    '고창군': { city: 'Gochang', region: 'Gochang' },
    '부안군': { city: 'Buan', region: 'Buan' },

    // 전라남도 주요 지역
    '목포시': { city: 'Mokpo', region: 'Mokpo' },
    '여수시': { city: 'Yeosu', region: 'Yeosu' },
    '순천시': { city: 'Suncheon', region: 'Suncheon' },
    '나주시': { city: 'Naju', region: 'Naju' },
    '광양시': { city: 'Gwangyang', region: 'Gwangyang' },
    '담양군': { city: 'Damyang', region: 'Damyang' },
    '곡성군': { city: 'Gokseong', region: 'Gokseong' },
    '구례군': { city: 'Gurye', region: 'Gurye' },
    '고흥군': { city: 'Goheung', region: 'Goheung' },
    '보성군': { city: 'Boseong', region: 'Boseong' },
    '화순군': { city: 'Hwasun', region: 'Hwasun' },
    '장흥군': { city: 'Jangheung', region: 'Jangheung' },
    '강진군': { city: 'Gangjin', region: 'Gangjin' },
    '해남군': { city: 'Haenam', region: 'Haenam' },
    '영암군': { city: 'Yeongam', region: 'Yeongam' },
    '무안군': { city: 'Muan', region: 'Muan' },
    '함평군': { city: 'Hampyeong', region: 'Hampyeong' },
    '영광군': { city: 'Yeonggwang', region: 'Yeonggwang' },
    '장성군': { city: 'Jangseong', region: 'Jangseong' },
    '완도군': { city: 'Wando', region: 'Wando' },
    '진도군': { city: 'Jindo', region: 'Jindo' },
    '신안군': { city: 'Sinan', region: 'Sinan' },

    // 경상북도 주요 지역
    '포항시': { city: 'Pohang', region: 'Pohang' },
    '경주시': { city: 'Gyeongju', region: 'Gyeongju' },
    '김천시': { city: 'Gimcheon', region: 'Gimcheon' },
    '안동시': { city: 'Andong', region: 'Andong' },
    '구미시': { city: 'Gumi', region: 'Gumi' },
    '영주시': { city: 'Yeongju', region: 'Yeongju' },
    '영천시': { city: 'Yeongcheon', region: 'Yeongcheon' },
    '상주시': { city: 'Sangju', region: 'Sangju' },
    '문경시': { city: 'Mungyeong', region: 'Mungyeong' },
    '경산시': { city: 'Gyeongsan', region: 'Gyeongsan' },
    '군위군': { city: 'Gunwi', region: 'Gunwi' },
    '의성군': { city: 'Uiseong', region: 'Uiseong' },
    '청송군': { city: 'Cheongsong', region: 'Cheongsong' },
    '영양군': { city: 'Yeongyang', region: 'Yeongyang' },
    '영덕군': { city: 'Yeongdeok', region: 'Yeongdeok' },
    '청도군': { city: 'Cheongdo', region: 'Cheongdo' },
    '고령군': { city: 'Goryeong', region: 'Goryeong' },
    '성주군': { city: 'Seongju', region: 'Seongju' },
    '칠곡군': { city: 'Chilgok', region: 'Chilgok' },
    '예천군': { city: 'Yecheon', region: 'Yecheon' },
    '봉화군': { city: 'Bonghwa', region: 'Bonghwa' },
    '울진군': { city: 'Uljin', region: 'Uljin' },
    '울릉군': { city: 'Ulleung', region: 'Ulleung' },

    // 경상남도 주요 지역
    '창원시': { city: 'Changwon', region: 'Changwon' },
    '진주시': { city: 'Jinju', region: 'Jinju' },
    '통영시': { city: 'Tongyeong', region: 'Tongyeong' },
    '사천시': { city: 'Sacheon', region: 'Sacheon' },
    '김해시': { city: 'Gimhae', region: 'Gimhae' },
    '밀양시': { city: 'Miryang', region: 'Miryang' },
    '거제시': { city: 'Geoje', region: 'Geoje' },
    '양산시': { city: 'Yangsan', region: 'Yangsan' },
    '의령군': { city: 'Uiryeong', region: 'Uiryeong' },
    '함안군': { city: 'Haman', region: 'Haman' },
    '창녕군': { city: 'Changnyeong', region: 'Changnyeong' },
    '고성군': { city: 'Goseong', region: 'Goseong' },
    '남해군': { city: 'Namhae', region: 'Namhae' },
    '하동군': { city: 'Hadong', region: 'Hadong' },
    '산청군': { city: 'Sancheong', region: 'Sancheong' },
    '함양군': { city: 'Hamyang', region: 'Hamyang' },
    '거창군': { city: 'Geochang', region: 'Geochang' },
    '합천군': { city: 'Hapcheon', region: 'Hapcheon' },

    // 제주특별자치도
    '제주시': { city: 'Jeju', region: 'Jeju' },
    '서귀포시': { city: 'Seogwipo', region: 'Seogwipo' }
};

// 한글 도시명을 영어로 변환하는 매핑
const cityMapping = {
    // 한국 주요 도시들
    '서울': 'Seoul',
    '부산': 'Busan',
    '대구': 'Daegu',
    '인천': 'Incheon',
    '광주': 'Gwangju',
    '대전': 'Daejeon',
    '울산': 'Ulsan',
    '세종': 'Sejong',
    '수원': 'Suwon',
    '고양': 'Goyang',
    '용인': 'Yongin',
    '창원': 'Changwon',
    '성남': 'Seongnam',
    '부천': 'Bucheon',
    '안산': 'Ansan',
    '안양': 'Anyang',
    '평택': 'Pyeongtaek',
    '시흥': 'Siheung',
    '김포': 'Gimpo',
    '광명': 'Gwacheon',
    '군포': 'Gunpo',
    '오산': 'Osan',
    '의왕': 'Uiwang',
    '하남': 'Hanam',
    '이천': 'Icheon',
    '안성': 'Anseong',
    '포천': 'Pocheon',
    '여주': 'Yeoju',
    '양평': 'Yangpyeong',
    '과천': 'Gwacheon',
    '구리': 'Guri',
    '남양주': 'Namyangju',
    '파주': 'Paju',
    '양주': 'Yangju',
    '동두천': 'Dongducheon',
    '가평': 'Gapyeong',
    '연천': 'Yeoncheon',
    '춘천': 'Chuncheon',
    '원주': 'Wonju',
    '강릉': 'Gangneung',
    '태백': 'Taebaek',
    '속초': 'Sokcho',
    '삼척': 'Samcheok',
    '동해': 'Donghae',
    '정선': 'Jeongseon',
    '영월': 'Yeongwol',
    '평창': 'Pyeongchang',
    '횡성': 'Hoengseong',
    '화천': 'Hwacheon',
    '양구': 'Yanggu',
    '인제': 'Inje',
    '고성': 'Goseong',
    '양양': 'Yangyang',
    '철원': 'Cheorwon',
    '청주': 'Cheongju',
    '충주': 'Chungju',
    '제천': 'Jecheon',
    '보은': 'Boeun',
    '옥천': 'Okcheon',
    '영동': 'Yeongdong',
    '증평': 'Jeungpyeong',
    '진천': 'Jincheon',
    '괴산': 'Goesan',
    '음성': 'Eumseong',
    '단양': 'Danyang',
    '천안': 'Cheonan',
    '공주': 'Gongju',
    '보령': 'Boryeong',
    '아산': 'Asan',
    '서산': 'Seosan',
    '논산': 'Nonsan',
    '계룡': 'Gyeryong',
    '당진': 'Dangjin',
    '금산': 'Geumsan',
    '부여': 'Buyeo',
    '서천': 'Seocheon',
    '청양': 'Cheongyang',
    '홍성': 'Hongseong',
    '예산': 'Yesan',
    '태안': 'Taean',
    '전주': 'Jeonju',
    '군산': 'Gunsan',
    '익산': 'Iksan',
    '정읍': 'Jeongeup',
    '남원': 'Namwon',
    '김제': 'Gimje',
    '완주': 'Wanju',
    '진안': 'Jinan',
    '무주': 'Muju',
    '장수': 'Jangsu',
    '임실': 'Imsil',
    '순창': 'Sunchang',
    '고창': 'Gochang',
    '부안': 'Buan',
    '목포': 'Mokpo',
    '여수': 'Yeosu',
    '순천': 'Suncheon',
    '나주': 'Naju',
    '광양': 'Gwangyang',
    '담양': 'Damyang',
    '곡성': 'Gokseong',
    '구례': 'Gurye',
    '고흥': 'Goheung',
    '보성': 'Boseong',
    '화순': 'Hwasun',
    '장흥': 'Jangheung',
    '강진': 'Gangjin',
    '해남': 'Haenam',
    '영암': 'Yeongam',
    '무안': 'Muan',
    '함평': 'Hampyeong',
    '영광': 'Yeonggwang',
    '장성': 'Jangseong',
    '완도': 'Wando',
    '진도': 'Jindo',
    '신안': 'Sinan',
    '포항': 'Pohang',
    '경주': 'Gyeongju',
    '김천': 'Gimcheon',
    '안동': 'Andong',
    '구미': 'Gumi',
    '영주': 'Yeongju',
    '영천': 'Yeongcheon',
    '상주': 'Sangju',
    '문경': 'Mungyeong',
    '경산': 'Gyeongsan',
    '군위': 'Gunwi',
    '의성': 'Uiseong',
    '청송': 'Cheongsong',
    '영양': 'Yeongyang',
    '영덕': 'Yeongdeok',
    '청도': 'Cheongdo',
    '고령': 'Goryeong',
    '성주': 'Seongju',
    '칠곡': 'Chilgok',
    '예천': 'Yecheon',
    '봉화': 'Bonghwa',
    '울진': 'Uljin',
    '울릉': 'Ulleung',
    '제주': 'Jeju',
    '서귀포': 'Seogwipo'
};

// DOM 요소들
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');
const weatherDetails = document.getElementById('weather-details');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

// 날씨 정보 표시 요소들
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('country-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const visibility = document.getElementById('visibility');
const forecastContainer = document.getElementById('forecast-container');
const errorMessage = document.getElementById('error-message');

// 이벤트 리스너 등록
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// 한글 도시명을 영어로 변환하는 함수
function translateCityName(cityName) {
    // 지역구 데이터에서 먼저 찾기
    if (koreanRegions[cityName]) {
        return koreanRegions[cityName].city;
    }
    
    // 매핑에서 찾기
    if (cityMapping[cityName]) {
        return cityMapping[cityName];
    }
    
    // 부분 매칭 시도 (도시명에 포함된 경우)
    for (const [korean, english] of Object.entries(cityMapping)) {
        if (cityName.includes(korean) || korean.includes(cityName)) {
            return english;
        }
    }
    
    // 지역구 부분 매칭 시도
    for (const [korean, data] of Object.entries(koreanRegions)) {
        if (cityName.includes(korean) || korean.includes(cityName)) {
            return data.city;
        }
    }
    
    // 변환되지 않으면 원래 이름 반환
    return cityName;
}

// 지역구 정보 가져오기
function getRegionInfo(cityName) {
    return koreanRegions[cityName] || null;
}

// 날씨 검색 함수
async function searchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('도시명을 입력해주세요.');
        return;
    }

    showLoading();
    
    try {
        // 지역구 정보 확인
        const regionInfo = getRegionInfo(city);
        let searchCity = city;
        let displayName = city;
        
        if (regionInfo) {
            // 지역구인 경우
            searchCity = regionInfo.city;
            displayName = `${city} (${regionInfo.city})`;
        } else {
            // 일반 도시인 경우
            searchCity = translateCityName(city);
        }
        
        // 현재 날씨 정보 가져오기
        const currentWeather = await getCurrentWeather(searchCity);
        
        // 5일 예보 가져오기
        const forecast = await getForecast(searchCity);
        
        // 날씨 정보 표시 (지역구 정보 포함)
        displayWeather(currentWeather, forecast, displayName);
        
    } catch (err) {
        showError(err.message);
    }
}

// 현재 날씨 정보 가져오기
async function getCurrentWeather(city) {
    const response = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=kr`
    );
    
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('도시를 찾을 수 없습니다. 도시명을 확인해주세요.');
        } else if (response.status === 401) {
            throw new Error('API 키가 유효하지 않습니다.');
        } else {
            throw new Error('날씨 정보를 가져오는 중 오류가 발생했습니다.');
        }
    }
    
    return await response.json();
}

// 5일 예보 가져오기
async function getForecast(city) {
    const response = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=kr`
    );
    
    if (!response.ok) {
        throw new Error('예보 정보를 가져오는 중 오류가 발생했습니다.');
    }
    
    return await response.json();
}

// 날씨 정보 표시
function displayWeather(currentWeather, forecast, displayName) {
    // 현재 날씨 정보 표시
    cityName.textContent = displayName;
    countryName.textContent = currentWeather.sys.country;
    temperature.textContent = `${Math.round(currentWeather.main.temp)}°C`;
    description.textContent = currentWeather.weather[0].description;
    
    // 날씨 아이콘 설정
    const iconCode = currentWeather.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    
    // 상세 정보 표시
    feelsLike.textContent = `${Math.round(currentWeather.main.feels_like)}°C`;
    humidity.textContent = `${currentWeather.main.humidity}%`;
    windSpeed.textContent = `${(currentWeather.wind.speed * 3.6).toFixed(1)} km/h`; // m/s를 km/h로 변환
    
    // 가시거리 표시 (km 단위)
    const visibilityKm = (currentWeather.visibility / 1000).toFixed(1);
    visibility.textContent = `${visibilityKm} km`;
    
    // 5일 예보 표시
    displayForecast(forecast);
    
    // UI 업데이트
    hideLoading();
    weatherInfo.style.display = 'none';
    weatherDetails.style.display = 'block';
    error.style.display = 'none';
}

// 5일 예보 표시
function displayForecast(forecast) {
    forecastContainer.innerHTML = '';
    
    // 일별 예보 데이터 처리 (3시간 간격 데이터를 일별로 그룹화)
    const dailyForecasts = groupForecastByDay(forecast.list);
    
    // 5일 예보 표시
    dailyForecasts.slice(0, 5).forEach(dayForecast => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        
        const date = new Date(dayForecast.date);
        const dayName = getDayName(date.getDay());
        
        forecastItem.innerHTML = `
            <div class="day">${dayName}</div>
            <img src="https://openweathermap.org/img/wn/${dayForecast.icon}@2x.png" alt="날씨 아이콘">
            <div class="temp">${Math.round(dayForecast.temp)}°C</div>
            <div class="description">${dayForecast.description}</div>
        `;
        
        forecastContainer.appendChild(forecastItem);
    });
}

// 예보 데이터를 일별로 그룹화
function groupForecastByDay(forecastList) {
    const dailyData = {};
    
    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dayKey = date.toDateString();
        
        if (!dailyData[dayKey]) {
            dailyData[dayKey] = {
                date: date,
                temps: [],
                icons: [],
                descriptions: []
            };
        }
        
        dailyData[dayKey].temps.push(item.main.temp);
        dailyData[dayKey].icons.push(item.weather[0].icon);
        dailyData[dayKey].descriptions.push(item.weather[0].description);
    });
    
    // 각 일의 평균값 계산
    return Object.values(dailyData).map(day => ({
        date: day.date,
        temp: day.temps.reduce((a, b) => a + b, 0) / day.temps.length,
        icon: day.icons[Math.floor(day.icons.length / 2)], // 중간 시간대의 아이콘 사용
        description: day.descriptions[Math.floor(day.descriptions.length / 2)]
    }));
}

// 요일 이름 반환
function getDayName(dayIndex) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[dayIndex];
}

// 로딩 표시
function showLoading() {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';
    weatherDetails.style.display = 'none';
    error.style.display = 'none';
}

// 로딩 숨기기
function hideLoading() {
    loading.style.display = 'none';
}

// 오류 표시
function showError(message) {
    errorMessage.textContent = message;
    error.style.display = 'block';
    loading.style.display = 'none';
    weatherInfo.style.display = 'none';
    weatherDetails.style.display = 'none';
}

// API 키 확인 및 안내
function checkApiKey() {
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        showError(`
            OpenWeather API 키가 설정되지 않았습니다.<br><br>
            사용 방법:<br>
            1. <a href="https://openweathermap.org/api" target="_blank">OpenWeather API</a>에서 무료 계정을 만드세요.<br>
            2. API 키를 받으세요.<br>
            3. script.js 파일의 API_KEY 변수에 받은 키를 입력하세요.<br><br>
            예시: const API_KEY = 'your_actual_api_key_here';
        `);
        return false;
    }
    return true;
}

// 페이지 로드 시 API 키 확인
document.addEventListener('DOMContentLoaded', () => {
    if (!checkApiKey()) {
        weatherInfo.style.display = 'none';
        weatherDetails.style.display = 'none';
        loading.style.display = 'none';
    }
});

// 날씨 상태에 따른 배경색 변경
function updateBackground(weatherCode) {
    const body = document.body;
    
    // 날씨 코드에 따른 배경색 설정
    if (weatherCode >= 200 && weatherCode < 300) {
        // 천둥번개
        body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
    } else if (weatherCode >= 300 && weatherCode < 400) {
        // 가벼운 비
        body.style.background = 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)';
    } else if (weatherCode >= 500 && weatherCode < 600) {
        // 비
        body.style.background = 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)';
    } else if (weatherCode >= 600 && weatherCode < 700) {
        // 눈
        body.style.background = 'linear-gradient(135deg, #dfe6e9 0%, #b2bec3 100%)';
    } else if (weatherCode >= 700 && weatherCode < 800) {
        // 안개
        body.style.background = 'linear-gradient(135deg, #b2bec3 0%, #95a5a6 100%)';
    } else if (weatherCode === 800) {
        // 맑음
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else {
        // 구름
        body.style.background = 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)';
    }
} 