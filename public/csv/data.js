var data =
    [{
        "id": 1,
        "name": "beijing",
        "chu": [
            [{ name: 'beijing' }, { name: 'hebei', value: 1559016 }],
            [{ name: 'beijing' }, { name: 'henan', value: 949741 }],
            [{ name: 'beijing ' }, { name: 'shandong', value: 597737 }],
            [{ name: 'beijing ' }, { name: 'anhui', value: 430096 }],
            [{ name: 'beijing ' }, { name: 'heilongjiang', value: 403287 }]
        ],
        "ru": [
            [{ name: 'hebei' }, { name: 'beijing', value: 74697 }],
            [{ name: 'shanghai' }, { name: 'beijing', value: 22843 }],
            [{ name: 'tianjin' }, { name: 'beijing', value: 22731 }],
            [{ name: 'guangdong' }, { name: 'beijing', value: 18918 }],
            [{ name: 'jiangsu' }, { name: 'beijing', value: 14117 }]
        ]
    }
        ,

    {
        "id": 2,
        "name": "tianjin",
        "chu": [
            [{ name: 'tianjin' }, { name: 'hebei', value: 754466 }],
            [{ name: 'tianjin' }, { name: 'shandong', value: 505129 }],
            [{ name: 'tianjin' }, { name: 'henan', value: 331307 }],
            [{ name: 'tianjin' }, { name: 'heilongjiang', value: 194113 }],
            [{ name: 'tianjin' }, { name: 'anhui', value: 138998 }]
        ],
        "ru": [
            [{ name: 'beijing' }, { name: 'tianjin', value: 95 }],
            [{ name: 'hebei' }, { name: 'tianjin', value: 95 }],
            [{ name: 'shanghai' }, { name: 'tianjin', value: 95 }],
            [{ name: 'shandong' }, { name: 'tianjin', value: 95 }],
            [{ name: 'guangdong' }, { name: 'tianjin', value: 95 }]
        ]
    }

        ,
    {
        "id": 3,
        "name": "hebei",
        "chu": [
            [{ name: 'hebei' }, { name: 'beijing', value: 196431 }],
            [{ name: 'hebei' }, { name: 'tianjin', value: 181149 }],
            [{ name: 'hebei' }, { name: 'neimenggu', value: 102610 }],
            [{ name: 'hebei' }, { name: 'shandong', value: 89303 }],
            [{ name: 'hebei' }, { name: 'sichuan', alue: 83144 }]
        ],
        "ru": [
            [{ name: 'beijing' }, { name: 'hebei', value: 1559016 }],
            [{ name: 'tianjin' }, { name: 'hebei ', value: 754466 }],
            [{ name: 'neimenggu' }, { name: 'hebei ', value: 183926 }],
            [{ name: 'shandong' }, { name: 'hebei ', value: 142422 }],
            [{ name: 'shanxi' }, { name: 'hebei ', value: 138172 }]
        ]
    }

        ,

    {
        "id": 4,
        "name": "shanxi",
        "chu": [
            [{ name: 'shanxi' }, { name: 'henan', value: 197438 }],
            [{ name: 'shanxi' }, { name: 'hebei', value: 138172 }],
            [{ name: 'shanxi' }, { name: 'sichuan', value: 79274 }],
            [{ name: 'shanxi' }, { name: 'neimenggu', value: 78775 }],
            [{ name: 'shanxi' }, { name: 'shanxi', value: 56292 }]
        ],
        "ru": [
            [{ name: 'beijing' }, { name: 'shanxi', value: 268506 }],
            [{ name: 'neimenggu' }, { name: 'shanxi', value: 156745 }],
            [{ name: 'tianjin' }, { name: 'shanxi', value: 101485 }],
            [{ name: 'shanxi' }, { name: 'shanxi', value: 67064 }],
            [{ name: 'hebei' }, { name: 'shanxi', value: 57965 }]
        ]
    }

        ,
    {
        "id": 5,
        "name": "neimenggu",
        "chu": [
            [{ name: 'neimenggu' }, { name: 'hebei', value: 183926 }],
            [{ name: 'neimenggu' }, { name: 'shanxi', value: 156745 }],
            [{ name: 'neimenggu' }, { name: 'heilongjiang', value: 142986 }],
            [{ name: 'neimenggu' }, { name: 'shanxi', value: 141982 }],
            [{ name: 'neimenggu' }, { name: 'gansu', value: 141901 }]
        ],
        "ru": [
            [{ name: 'beijing' }, { name: 'neimenggu', value: 236088 }],
            [{ name: 'liaoning' }, { name: 'neimenggu', value: 179980 }],
            [{ name: 'hebei' }, { name: 'neimenggu', value: 102610 }],
            [{ name: 'tianjin' }, { name: 'neimenggu', value: 85171 }],
            [{ name: 'shanxi' }, { name: 'neimenggu', value: 78775 }]
        ]
    }
        ,

    {
        "id": 6,
        "name": "liaoning",
        "chu": [
            [{ name: 'liaoning' }, { name: 'heilongjiang', value: 569555 }],
            [{ name: 'liaoning' }, { name: 'jilin', value: 300028 }],
            [{ name: 'liaoning' }, { name: 'neimenggu', value: 179980 }],
            [{ name: 'liaoning' }, { name: 'henan', value: 122054 }],
            [{ name: 'liaoning' }, { name: 'shandong', value: 119513 }]
        ],
        "ru": [
            [{ name: 'beijing' }, { name: 'liaoning', value: 247843 }],
            [{ name: 'tianjin' }, { name: 'liaoning', value: 81930 }],
            [{ name: 'shandong' }, { name: 'liaoning', value: 78808 }],
            [{ name: 'hebei' }, { name: 'liaoning', value: 75003 }],
            [{ name: 'neimenggu' }, { name: 'liaoning', value: 73364 }]
        ]
    }
        ,
    {
        "id": 7,
        "name": "jilin",
        "chu": [
            [{ name: 'jilin' }, { name: 'heilongjiang', value: 130578 }],
            [{ name: 'jilin' }, { name: 'liaoning', value: 63868 }],
            [{ name: 'jilin' }, { name: 'shandong', value: 44538 }],
            [{ name: 'jilin' }, { name: 'neimenggu', value: 34743 }],
            [{ name: 'jilin' }, { name: 'henan', value: 25638 }]
        ],
        "ru": [
            [{ name: 'liaoning' }, { name: 'jilin', value: 30028 }],
            [{ name: 'beijing' }, { name: 'jilin', value: 213990 }],
            [{ name: 'shandong' }, { name: 'jilin', value: 186138 }],
            [{ name: 'heilongjiang' }, { name: 'jilin', value: 120545 }],
            [{ name: 'tianjin' }, { name: 'jilin', value: 101541 }]
        ]
    }
        ,

    {
        "id": 8,
        "name": "heilongjiang",
        "chu": [
            [{ name: 'heilongjiang' }, { name: 'jilin', value: 120845 }],
            [{ name: 'heilongjiang' }, { name: 'shandong', value: 62131 }],
            [{ name: 'heilongjiang' }, { name: 'liaoning', value: 57612 }],
            [{ name: 'heilongjiang' }, { name: 'neimenggu', value: 52542 }],
            [{ name: 'heilongjiang' }, { name: 'hebei', value: 27082 }]
        ],
        "ru": [
            [{ name: 'liaoning' }, { name: 'heilongjiang', value: 569555 }],
            [{ name: 'beijing' }, { name: 'heilongjiang', value: 408047 }],
            [{ name: 'shandong' }, { name: 'heilongjiang', value: 403287 }],
            [{ name: 'heilongjiang' }, { name: 'heilongjiang', value: 196431 }],
            [{ name: 'tianjin' }, { name: 'heilongjiang', value: 194113 }]
        ]
    }
        ,

    {
        "id": 9,
        "name": "shanghai",
        "chu": [
            [{ name: 'shanghai' }, { name: 'anhui', value: 2602273 }],
            [{ name: 'shanghai' }, { name: 'jiangsu', value: 1593522 }],
            [{ name: 'shanghai' }, { name: 'henan', value: 782553 }],
            [{ name: 'shanghai' }, { name: 'sichuan', value: 624465 }],
            [{ name: 'shanghai' }, { name: 'jiangxi', value: 487192 }]
        ],
        "ru": [
            [{ name: 'jiangsu' }, { name: 'shanghai', value: 82612 }],
            [{ name: 'zhejiang' }, { name: 'shanghai', value: 38525 }],
            [{ name: 'anhui' }, { name: 'shanghai', value: 20773 }],
            [{ name: 'beijing' }, { name: 'shanghai', value: 18245 }],
            [{ name: 'guangdong' }, { name: 'shanghai', value: 14206 }]
        ]
    }
        ,

    {
        "id": 10,
        "name": "jiangsu",
        "chu": [
            [{ name: 'jiangsu' }, { name: 'anhui', value: 2574625 }],
            [{ name: 'jiangsu' }, { name: 'henan', value: 1016424 }],
            [{ name: 'jiangsu' }, { name: 'sichuan', value: 650575 }],
            [{ name: 'jiangsu' }, { name: 'shandong', value: 410813 }],
            [{ name: 'jiangsu' }, { name: 'hubei', value: 400715 }]
        ],
        "ru": [
            [{ name: 'shanghai' }, { name: 'jiangsu', value: 1503522 }],
            [{ name: 'zhejiang' }, { name: 'jiangsu', value: 341618 }],
            [{ name: 'beijing' }, { name: 'jiangsu', value: 194997 }],
            [{ name: 'shandong' }, { name: 'jiangsu', value: 138354 }],
            [{ name: 'guangdong' }, { name: 'jiangsu', value: 126289 }]
        ]
    }
        ,

    {
        "id": 11,
        "name": "zhejiang",
        "chu": [
            [{ name: 'zhejiang' }, { name: 'jiangxi', value: 1529896 }],
            [{ name: 'zhejiang' }, { name: 'guizhou', value: 1499220 }],
            [{ name: 'zhejiang' }, { name: 'sichuan', value: 1240580 }],
            [{ name: 'zhejiang' }, { name: 'henan', value: 1224230 }],
            [{ name: 'zhejiang' }, { name: 'hubei', value: 898618 }]
        ],
        "ru": [
            [{ name: 'shanghai' }, { name: 'zhejiang', value: 450506 }],
            [{ name: 'jiangsu' }, { name: 'zhejiang', value: 268489 }],
            [{ name: 'guangdong' }, { name: 'zhejiang', value: 155697 }],
            [{ name: 'beijing' }, { name: 'zhejiang', value: 126071 }],
            [{ name: 'fujian' }, { name: 'zhejiang', value: 69114 }]
        ]
    }
        ,

    {
        "id": 12,
        "name": "anhui",
        "chu": [
            [{ name: 'anhui' }, { name: 'jiangsu', value: 11421 }],
            [{ name: 'anhui' }, { name: 'henan', value: 96612 }],
            [{ name: 'anhui' }, { name: 'zhejiang', value: 61431 }],
            [{ name: 'anhui' }, { name: 'hubei', value: 48051 }],
            [{ name: 'anhui' }, { name: 'sichuan', value: 43819 }]
        ],
        "ru": [
            [{ name: 'shanghai' }, { name: 'anhui', value: 2602273 }],
            [{ name: 'jiangsu' }, { name: 'anhui', value: 2574625 }],
            [{ name: 'zhejiang' }, { name: 'anhui', value: 2285198 }],
            [{ name: 'guangdong' }, { name: 'anhui', value: 445369 }],
            [{ name: 'beijing' }, { name: 'anhui', value: 430096 }]
        ]
    }
        ,
    {
        "id": 13,
        "name": "fujian",
        "chu": [
            [{ name: 'fujian' }, { name: 'jiangxi', value: 948654 }],
            [{ name: 'fujian' }, { name: 'sichuan', value: 822445 }],
            [{ name: 'fujian' }, { name: 'guizhou', value: 472000 }],
            [{ name: 'fujian' }, { name: 'chongqing', value: 409644 }],
            [{ name: 'fujian' }, { name: 'hubei', value: 340054 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'fujian', value: 434276 }],
            [{ name: 'shanghai' }, { name: 'fujian', value: 263790 }],
            [{ name: 'zhejiang' }, { name: 'fujian', value: 163702 }],
            [{ name: 'jiangsu' }, { name: 'fujian', value: 138615 }],
            [{ name: 'beijing' }, { name: 'fujian', value: 95900 }]
        ]
    }
        ,
    {
        "id": 14,
        "name": "jiangxi",
        "chu": [
            [{ name: 'jiangxi' }, { name: 'huanan', value: 68386 }],
            [{ name: 'jiangxi' }, { name: 'hubei', value: 52502 }],
            [{ name: 'jiangxi' }, { name: 'anhui', value: 51294 }],
            [{ name: 'jiangxi' }, { name: 'zhejiang', value: 47102 }],
            [{ name: 'jiangxi' }, { name: 'fujian', value: 44554 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'jiangxi', value: 1871182 }],
            [{ name: 'zhejiang' }, { name: 'jiangxi', value: 1529896 }],
            [{ name: 'shanghai' }, { name: 'jiangxi', value: 487192 }],
            [{ name: 'jiangsu' }, { name: 'jiangxi', value: 264814 }],
            [{ name: 'beijing' }, { name: 'jiangxi', value: 141197 }]
        ]
    }
        ,
    {
        "id": 15,
        "name": "shandong",
        "chu": [
            [{ name: 'shandong' }, { name: 'heilongjiang', value: 408047 }],
            [{ name: 'shandong' }, { name: 'henan', value: 284866 }],
            [{ name: 'shandong' }, { name: 'jilin', value: 186138 }],
            [{ name: 'shandong' }, { name: 'hebei', value: 142422 }],
            [{ name: 'shandong' }, { name: 'jiangsu', value: 138354 }]
        ],
        "ru": [
            [{ name: 'beijing' }, { name: 'shandong', value: 597737 }],
            [{ name: 'tainjin' }, { name: 'shandong', value: 505129 }],
            [{ name: 'jiangsu' }, { name: 'shandong', value: 410813 }],
            [{ name: 'shanghai' }, { name: 'shandong', value: 378404 }],
            [{ name: 'zhejiang' }, { name: 'shandong', value: 185417 }]
        ]
    },
    {
        "id": 16,
        "name": "henan",
        "chu": [
            [{ name: 'henan' }, { name: 'anhui', value: 61209 }],
            [{ name: 'henan' }, { name: 'hubei', value: 60084 }],
            [{ name: 'henan' }, { name: 'shandong', value: 49067 }],
            [{ name: 'henan' }, { name: 'sichuan', value: 39356 }],
            [{ name: 'henan' }, { name: 'hubei', value: 38663 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'henan', value: 1762133 }],
            [{ name: 'zhejiang' }, { name: 'henan', value: 1224230 }],
            [{ name: 'jiangsu' }, { name: 'henan', value: 1016424 }],
            [{ name: 'beijing' }, { name: 'henan', value: 979741 }],
            [{ name: 'shanghai' }, { name: 'henan', value: 782553 }]
        ]
    },

    {
        "id": 17,
        "name": "hubei",
        "chu": [
            [{ name: 'hubei' }, { name: 'henan', value: 189654 }],
            [{ name: 'hubei' }, { name: 'chongqing', value: 111695 }],
            [{ name: 'hubei' }, { name: 'hunan', value: 98208 }],
            [{
                name: 'hubei'
            }, { name: 'sichuan', value: 74040 }],
            [{ name: 'hubei' }, { name: 'anhui', value: 60119 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'hubei', value: 2335227 }],
            [{ name: 'zhejiang' }, { name: 'hubei', value: 898618 }],
            [{ name: 'shanghai' }, { name: 'hubei', value: 407747 }],
            [{ name: 'jiangsu' }, { name: 'hubei', value: 400715 }],
            [{ name: 'fujian' }, { name: 'hubei', value: 340054 }]
        ]
    }
        ,

    {
        "id": 18,
        "name": "hunan",
        "chu": [
            [{ name: 'hunan' }, { name: 'hubei', value: 130046 }],
            [{ name: 'hunan' }, { name: 'jiangxi', value: 71968 }],
            [{ name: 'hunan' }, { name: 'guangdong', value: 67350 }],
            [{ name: 'hunan' }, { name: 'sichuan', value: 50775 }],
            [{ name: 'hunan' }, { name: 'guizhou', value: 45652 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'hunan', value: 4602147 }],
            [{ name: 'zhejiang' }, { name: 'hunan', value: 749699 }],
            [{ name: 'fujian' }, { name: 'hunan', value: 234580 }],
            [{ name: 'shanghai' }, { name: 'hunan', value: 228544 }],
            [{ name: 'guangxi' }, { name: 'hunan', value: 204022 }]
        ]
    }

        ,
    {
        "id": 19,
        "name": "guangdong",
        "chu": [
            [{ name: 'guangdong' }, { name: 'hunan', value: 4602147 }],
            [{ name: 'guangdong' }, { name: 'guangxi', value: 3555330 }],
            [{ name: 'guangdong' }, { name: 'sichuan', value: 2602276 }],
            [{ name: 'guangdong' }, { name: 'hubei', value: 2335227 }],
            [{ name: 'guangdong' }, { name: 'jiangxi', value: 1871182 }]
        ],
        "ru": [
            [{ name: 'guangxi' }, { name: 'guangdong', value: 124397 }],
            [{ name: 'hainan' }, { name: 'guangdong', value: 79765 }],
            [{ name: 'shanghai' }, { name: 'guangdong', value: 79348 }],
            [{ name: 'beijing' }, { name: 'guangdong', value: 70783 }],
            [{ name: 'hunan' }, { name: 'guangdong', value: 67350 }]
        ]
    },

    {
        "id": 20,
        "name": "guangxi",
        "chu": [
            [{ name: 'guangxi' }, { name: 'hunan', value: 204022 }],
            [{ name: 'guangxi' }, { name: 'guangdong', value: 124397 }],
            [{ name: 'guangxi' }, { name: 'sichuan', value: 56084 }],
            [{ name: 'guangxi' }, { name: 'guizhou', value: 50964 }],
            [{ name: 'guangxi' }, { name: 'hubei', value: 49900 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'guangxi', value: 3555330 }],
            [{ name: 'zhejiang' }, { name: 'guangxi', value: 139125 }],
            [{ name: 'fujian' }, { name: 'guangxi', value: 69962 }],
            [{ name: 'hainan' }, { name: 'guangxi', value: 59289 }],
            [{ name: 'shanghai' }, { name: 'guangxi', value: 49241 }]
        ]
    },


    {
        "id": 21,
        "name": "hainan",
        "chu": [
            [{ name: 'hainan' }, { name: 'guangdong', value: 79765 }],
            [{ name: 'hainan' }, { name: 'sichuan', value: 76099 }],
            [{ name: 'hainan' }, { name: 'hunan', value: 63997 }],
            [{ name: 'hainan' }, { name: 'guangxi', value: 59289 }],
            [{ name: 'hainan' }, { name: 'hubei', value: 43816 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'hainan', value: 163638 }],
            [{ name: 'guangxi' }, { name: 'hainan', value: 11538 }],
            [{ name: 'shanghai' }, { name: 'hainan', value: 9451 }],
            [{ name: 'fujian' }, { name: 'hainan', value: 9030 }],
            [{ name: 'beijing' }, { name: 'hainan', value: 8293 }]
        ]
    },


    {
        "id": 22,
        "name": "chongqing",
        "chu": [
            [{ name: 'chongqing' }, { name: 'sichuan', value: 507990 }],
            [{ name: 'chongqing' }, { name: 'guizhou', value: 71950 }],
            [{ name: 'chongqing' }, { name: 'hubei', value: 45346 }],
            [{ name: 'chongqing' }, { name: 'yunnan', value: 31326 }],
            [{ name: 'chongqing' }, { name: 'hunan', value: 28995 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'chongqing', value: 933918 }],
            [{ name: 'zhejiang' }, { name: 'chongqing', value: 592942 }],
            [{ name: 'fujian' }, { name: 'chongqing', value: 409644 }],
            [{ name: 'sichuan' }, { name: 'chongqing', value: 299452 }],
            [{ name: 'shanghai' }, { name: 'chongqing', value: 227653 }]
        ]
    },


    {
        "id": 23,
        "name": "sichuan",
        "chu": [
            [{ name: 'sichuan' }, { name: 'chongqong', value: 29945 }],
            [{ name: 'sichuan' }, { name: 'yunnan', value: 91264 }],
            [{ name: 'sichuan' }, { name: 'hubei', value: 70239 }],
            [{ name: 'sichuan' }, { name: 'henan', value: 59436 }],
            [{ name: 'sichuan' }, { name: 'guizhou', value: 57629 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'sichuan', value: 2602276 }],
            [{ name: 'zhejiang' }, { name: 'sichuan', value: 1240580 }],
            [{ name: 'fujian' }, { name: 'sichuan', value: 822445 }],
            [{ name: 'jiangsu' }, { name: 'sichuan', value: 650575 }],
            [{ name: 'shanghai' }, { name: 'sichuan', value: 624465 }]
        ]
    },

    {
        "id": 24,
        "name": "guizhou",
        "chu": [
            [{ name: 'guizhou' }, { name: 'sichuan', value: 209254 }],
            [{ name: 'guizhou' }, { name: 'hunan', value: 114524 }],
            [{ name: 'guizhou' }, { name: 'chongqing', value: 109301 }],
            [{ name: 'guizhou' }, { name: 'hubei', value: 41021 }],
            [{ name: 'guizhou' }, { name: 'yunnan', value: 40379 }]
        ],
        "ru": [
            [{ name: 'zhejiang' }, { name: 'guizhou', value: 1499220 }],
            [{ name: 'guanngdong' }, { name: 'guizhou', value: 957774 }],
            [{ name: 'fujian' }, { name: 'guizhou', value: 472000 }],
            [{ name: 'jiangsu' }, { name: 'guizhou', value: 275505 }],
            [{ name: 'yunnan' }, { name: 'guizhou', value: 187405 }]
        ]
    },


    {
        "id": 25,
        "name": "yunnan",
        "chu": [
            [{ name: 'yunnan' }, { name: 'sichuan', value: 345329 }],
            [{ name: 'yunnan' }, { name: 'guizhou', value: 187405 }],
            [{ name: 'yunnan' }, { name: 'chongqing', value: 152813 }],
            [{ name: 'yunnan' }, { name: 'hunan', value: 132577 }],
            [{ name: 'yunnan' }, { name: 'hubei', value: 56778 }]
        ],
        "ru": [
            [{ name: 'zhejiang' }, { name: 'yunnan', value: 411088 }],
            [{ name: 'guanngdong' }, { name: 'yunnan', value: 322351 }],
            [{ name: 'jiangsu' }, { name: 'yunnan', value: 141091 }],
            [{ name: 'fujian' }, { name: 'yunnan', value: 98241 }],
            [{ name: 'sichuan' }, { name: 'yunnan', value: 91264 }]
        ]
    },



    {
        "id": 26,
        "name": "xizang",
        "chu": [
            [{ name: 'xizang' }, { name: 'sichuan', value: 83903 }],
            [{ name: 'xizang' }, { name: 'gansu', value: 19671 }],
            [{ name: 'xizang' }, { name: 'chongqing', value: 11482 }],
            [{ name: 'xizang' }, { name: 'henan', value: 8640 }],
            [{ name: 'xizang' }, { name: 'qinghai', value: 8160 }]
        ],
        "ru": [
            [{ name: 'sichuan' }, { name: 'xizang', value: 19373 }],
            [{ name: 'shanxi' }, { name: 'xizang', value: 6177 }],
            [{ name: 'qinghai' }, { name: 'xizang', value: 4853 }],
            [{ name: 'chongqing' }, { name: 'xizang', value: 3335 }],
            [{ name: 'gansu' }, { name: 'xizang', value: 2522 }]
        ]
    },


    {
        "id": 27,
        "name": "shanxi",
        "chu": [
            [{ name: 'shanxi' }, { name: 'henan', value: 160447 }],
            [{ name: 'shanxi' }, { name: 'sichuan', value: 116578 }],
            [{ name: 'shanxi' }, { name: 'gansu', value: 102522 }],
            [{ name: 'shanxi' }, { name: 'shanxi', value: 67064 }],
            [{ name: 'shanxi' }, { name: 'hubei', value: 64274 }]
        ],
        "ru": [
            [{ name: 'guangdong' }, { name: 'shanxi', value: 439222 }],
            [{ name: 'jiangsu' }, { name: 'shanxi', value: 206894 }],
            [{ name: 'zhejiang' }, { name: 'shanxi', value: 168197 }],
            [{ name: 'beijing' }, { name: 'shanxi', value: 164559 }],
            [{ name: 'neimenggu' }, { name: 'shanxi', value: 141982 }]
        ]
    },


    {
        "id": 27,
        "name": "gansu",
        "chu": [
            [{ name: 'gansui' }, { name: 'qinghai', value: 57954 }],
            [{ name: 'gansu' }, { name: 'henan', value: 57449 }],
            [{ name: 'gansu' }, { name: 'shanxi', value: 47579 }],
            [{ name: 'gansu' }, { name: 'sichuan', value: 44446 }],
            [{ name: 'gansu' }, { name: 'hubei', value: 25911 }]
        ],
        "ru": [
            [{ name: 'xinjiang' }, { name: 'gansu', value: 344457 }],
            [{ name: 'beijing' }, { name: 'gansu', value: 143265 }],
            [{ name: 'neimenggu' }, { name: 'gansu', value: 141901 }],
            [{ name: 'guangdong' }, { name: 'gansu', value: 124987 }],
            [{ name: 'shanxi' }, { name: 'gansu', value: 105125 }]
        ]
    },


    {
        "id": 28,
        "name": "qinghai",
        "chu": [
            [{ name: 'qinghai' }, { name: 'gansu', value: 73076 }],
            [{ name: 'qinghai' }, { name: 'sichuan', value: 44499 }],
            [{ name: 'qinghai' }, { name: 'hennan', value: 44426 }],
            [{ name: 'qinghai' }, { name: 'shanxi', value: 23066 }],
            [{ name: 'qinghai' }, { name: 'hubeii', value: 18364 }]
        ],
        "ru": [
            [{ name: 'gansu' }, { name: 'qinghai', value: 57954 }],
            [{ name: 'xinjiang' }, { name: 'qinghai', value: 18197 }],
            [{ name: 'sichuan' }, { name: 'qinghai', value: 17057 }],
            [{ name: 'jiangsu' }, { name: 'qinghai', value: 13807 }],
            [{ name: 'guangdong' }, { name: 'qinghai', value: 13087 }]
        ]
    },


    {
        "id": 29,
        "name": "ningxia",
        "chu": [
            [{ name: 'ningxia' }, { name: 'gansu', value: 105125 }],
            [{ name: 'ningxia' }, { name: 'shanxii', value: 55455 }],
            [{ name: 'ningxia' }, { name: 'henan', value: 49339 }],
            [{ name: 'ningxia' }, { name: 'sichuan', value: 21827 }],
            [{ name: 'ningxia' }, { name: 'anhui', value: 17918 }]
        ],
        "ru": [
            [{ name: 'xinjiang' }, { name: 'ningxia', value: 50265 }],
            [{ name: 'neimenggu' }, { name: 'ningxia', value: 43225 }],
            [{ name: 'shanxi' }, { name: 'ningxia', value: 23504 }],
            [{ name: 'beijing' }, { name: 'ningxia', value: 17833 }],
            [{ name: 'gansu' }, { name: 'ningxia', value: 11409 }]
        ]
    },


    {
        "id": 30,
        "name": "xinjiang",
        "chu": [
            [{ name: 'xinjiang' }, { name: 'henan', value: 386615 }],
            [{ name: 'xinjiang' }, { name: 'sichuan', value: 250909 }],
            [{ name: 'xinjiang' }, { name: 'gansu', value: 344457 }],
            [{ name: 'xinjiang' }, { name: 'shanxi', value: 102068 }],
            [{ name: 'xinjiang' }, { name: 'chongqing', value: 90138 }]
        ],
        "ru": [
            [{ name: 'beijing' }, { name: 'xinjiang', value35852 }],
            [{ name: 'shanghai' }, { name: 'xinjiang', value: 28803 }],
            [{ name: 'guangdong' }, { name: 'xinjiang', value: 26122 }],
            [{ name: 'sichuan' }, { name: 'xinjiang', value: 24074 }],
            [{ name: 'shandong' }, { name: 'xinjiang', value: 23588 }]
        ]
    }
    ]