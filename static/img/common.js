const a0_0x1f81d8 = a0_0x4d4f;
(function (_0x22493b, _0x200333) {
    const _0x57e8a7 = a0_0x4d4f,
        _0x47c546 = _0x22493b();
    while (!![]) {
        try {
            const _0x169dca = -parseInt(_0x57e8a7(0x208)) / 0x1 * (-parseInt(_0x57e8a7(0x223)) / 0x2) + -parseInt(_0x57e8a7(0x283)) / 0x3 + parseInt(_0x57e8a7(0x255)) / 0x4 * (parseInt(_0x57e8a7(0x1d5)) / 0x5) + parseInt(_0x57e8a7(0x1e2)) / 0x6 * (parseInt(_0x57e8a7(0x1d6)) / 0x7) + parseInt(_0x57e8a7(0x210)) / 0x8 * (parseInt(_0x57e8a7(0x284)) / 0x9) + -parseInt(_0x57e8a7(0x24e)) / 0xa * (-parseInt(_0x57e8a7(0x28f)) / 0xb) + parseInt(_0x57e8a7(0x211)) / 0xc * (-parseInt(_0x57e8a7(0x269)) / 0xd);
            if (_0x169dca === _0x200333) break;
            else _0x47c546['push'](_0x47c546['shift']());
        } catch (_0x4463f1) {
            _0x47c546['push'](_0x47c546['shift']());
        }
    }
}(a0_0x19be, 0xee35f));
const u = require(a0_0x1f81d8(0x218)),
    {
        ipcRenderer
    } = require(a0_0x1f81d8(0x21c)),
    path = require(a0_0x1f81d8(0x221)),
    tokenKey = a0_0x1f81d8(0x209),
    accountKey = 'chat_crms_account',
    languageKey = a0_0x1f81d8(0x25b),
    Queue = require(path[a0_0x1f81d8(0x25e)](__dirname, './queue.js')),
    {
        youdao,
        google,
        deepl,
        tencent
    } = require(path[a0_0x1f81d8(0x25e)](__dirname, './local.js')),
    fs = require('fs');
let translateQueue, fontSize = 0xf,
    fontColor = a0_0x1f81d8(0x1ee);
const apiUrl = a0_0x1f81d8(0x23c);

function initQueue(_0x4b696b) {
    _0x4b696b === 0x0 && (_0x4b696b = 0x32), translateQueue = new Queue(_0x4b696b);
}

function isNumber(_0x48b495) {
    const _0xa34366 = a0_0x1f81d8,
        _0x5cde89 = /^\d+$/;
    return _0x5cde89[_0xa34366(0x248)](_0x48b495);
}

function isChinese(_0x596214) {
    const _0x139c93 = a0_0x1f81d8,
        _0x1a95cd = /^[\u4e00-\u9fa5]+$/;
    return _0x1a95cd[_0x139c93(0x248)](_0x596214);
}

function handle(_0x2f6554, _0x12dbba, _0x8d6b48, _0x27fa44, _0x22d18c, _0x563bbc, _0x352284, _0x153592, _0x14d62e, _0x7d2c14) {
    const _0x502f50 = a0_0x1f81d8;
    try {
        if (u(_0x12dbba)['parent']()[_0x502f50(0x200)](_0x502f50(0x1bf))['length'] <= 0x0) {
            const _0x381831 = document['createElement'](_0x502f50(0x1ea));
            _0x381831[_0x502f50(0x201)] = _0x502f50(0x219), _0x381831[_0x502f50(0x258)][_0x502f50(0x232)] = 0x1, _0x381831[_0x502f50(0x24c)] = _0x502f50(0x20f);
            if (_0x22d18c === 'after') u(_0x12dbba)[_0x502f50(0x28b)](_0x381831);
            else {
                if (_0x22d18c === 'before') u(_0x12dbba)[_0x502f50(0x1e7)](_0x381831);
                else _0x22d18c === _0x502f50(0x22f) && u(_0x12dbba)[_0x502f50(0x22f)](_0x381831);
            }
        }
        const _0x493a09 = u(_0x12dbba)[_0x502f50(0x1db)]()[_0x502f50(0x200)](_0x502f50(0x1bf))[_0x502f50(0x217)]();
        !fontSize && (fontSize = 0xf), !fontColor && (fontColor = '#5ac463'), _0x493a09[_0x502f50(0x258)][_0x502f50(0x1ff)] = fontSize + 'px', _0x493a09[_0x502f50(0x258)][_0x502f50(0x228)] = fontColor + '', _0x493a09[_0x502f50(0x28d)] = _0x502f50(0x1d9), _0x493a09['style'][_0x502f50(0x279)] = _0x502f50(0x1fe), _0x493a09[_0x502f50(0x22a)] = function () {
            const _0x1599b1 = _0x502f50;
            _0x493a09[_0x1599b1(0x28d)] = _0x1599b1(0x1ba), setTimeout(() => {
                _0x14d62e(_0x2f6554, _0x12dbba, _0x563bbc, _0x352284, _0x153592, _0x8d6b48, _0x22d18c, _0x7d2c14);
            }, 0xc8);
        };
    } catch (_0x53108d) {
        console[_0x502f50(0x239)](_0x53108d);
    }
}

function success(_0xb887f4, _0x116f4c, _0x4686ab, _0x3eb555) {
    const _0x4c5d2a = a0_0x1f81d8;
    try {
        if (u(_0xb887f4)['parent']()[_0x4c5d2a(0x200)]('.translation-span')[_0x4c5d2a(0x21f)] <= 0x0) {
            const _0x81c8e4 = document[_0x4c5d2a(0x243)]('div');
            _0x81c8e4[_0x4c5d2a(0x201)] = _0x4c5d2a(0x219), _0x81c8e4[_0x4c5d2a(0x258)][_0x4c5d2a(0x232)] = 0x1, _0x81c8e4[_0x4c5d2a(0x24c)] = 'translation-span';
            if (_0x3eb555 === _0x4c5d2a(0x28b)) u(_0xb887f4)[_0x4c5d2a(0x28b)](_0x81c8e4);
            else {
                if (_0x3eb555 === _0x4c5d2a(0x1e7)) u(_0xb887f4)[_0x4c5d2a(0x1e7)](_0x81c8e4);
                else _0x3eb555 === _0x4c5d2a(0x22f) && u(_0xb887f4)['append'](_0x81c8e4);
            }
        }
        const _0x18cc09 = u(_0xb887f4)[_0x4c5d2a(0x1db)]()[_0x4c5d2a(0x200)](_0x4c5d2a(0x1bf))['first']();
        _0x18cc09[_0x4c5d2a(0x22a)] = function () {}, !fontSize && (fontSize = 0xf), !fontColor && (fontColor = '#5ac463'), _0x18cc09[_0x4c5d2a(0x258)]['fontSize'] = fontSize + 'px', _0x18cc09[_0x4c5d2a(0x258)]['color'] = fontColor, _0x18cc09[_0x4c5d2a(0x258)][_0x4c5d2a(0x279)] = _0x4c5d2a(0x280), _0x116f4c ? _0x18cc09[_0x4c5d2a(0x28d)] = _0x4c5d2a(0x1fc) + _0x4686ab : _0x18cc09['textContent'] = _0x4c5d2a(0x24d) + _0x4686ab;
    } catch (_0x147916) {
        console['log'](_0x147916);
    }
}

function error(_0x34a638, _0x531bd0, _0x24a9ef, _0x11abe7, _0x50a81e, _0xe53146, _0x548228, _0x163a13, _0x3f1b41, _0x2bac66) {
    const _0x1df099 = a0_0x1f81d8;
    try {
        if (u(_0x531bd0)['parent']()[_0x1df099(0x200)](_0x1df099(0x1bf))[_0x1df099(0x21f)] <= 0x0) {
            const _0x14262f = document[_0x1df099(0x243)](_0x1df099(0x1ea));
            _0x14262f[_0x1df099(0x201)] = _0x1df099(0x219), _0x14262f['style'][_0x1df099(0x232)] = 0x1, _0x14262f[_0x1df099(0x24c)] = _0x1df099(0x20f);
            if (_0x50a81e === 'after') u(_0x531bd0)[_0x1df099(0x28b)](_0x14262f);
            else {
                if (_0x50a81e === 'before') u(_0x531bd0)['before'](_0x14262f);
                else _0x50a81e === _0x1df099(0x22f) && u(_0x531bd0)[_0x1df099(0x22f)](_0x14262f);
            }
        }
        const _0x48ce40 = u(_0x531bd0)['parent']()['find']('.translation-span')[_0x1df099(0x217)]();
        _0x11abe7 ? _0x48ce40['textContent'] = _0x1df099(0x247) + _0x11abe7 + ',点击重试' : _0x48ce40['textContent'] = _0x1df099(0x28e), !fontSize && (fontSize = 0xf), !fontColor && (fontColor = '#5ac463'), _0x48ce40[_0x1df099(0x258)][_0x1df099(0x1ff)] = fontSize + 'px', _0x48ce40[_0x1df099(0x258)]['color'] = fontColor, _0x48ce40[_0x1df099(0x258)][_0x1df099(0x279)] = _0x1df099(0x1fe), _0x48ce40[_0x1df099(0x22a)] = function () {
            const _0x5b307b = _0x1df099;
            _0x48ce40['textContent'] = _0x5b307b(0x1ba), setTimeout(() => {
                _0x3f1b41(_0x34a638, _0x531bd0, _0xe53146, _0x548228, _0x163a13, _0x24a9ef, _0x50a81e, _0x2bac66);
            }, 0xc8);
        };
    } catch (_0x1f9609) {
        console[_0x1df099(0x239)](_0x1f9609);
    }
}

function getPlaceholderText(_0x479252, _0x297d52, _0x46f268) {
    const _0x29f6b6 = a0_0x1f81d8;
    if (_0x479252) {
        if (!_0x479252['customerAppId'] && _0x297d52) return _0x29f6b6(0x1cf);
        return _0x479252[_0x29f6b6(0x1d2)] ? _0x479252[_0x29f6b6(0x262)] ? _0x29f6b6(0x1e5) + _0x479252[_0x29f6b6(0x272)] + _0x29f6b6(0x214) + _0x479252[_0x29f6b6(0x230)] + _0x29f6b6(0x1b9) : _0x29f6b6(0x1bc) + _0x479252['sendCodeName'] + ']</span>线路翻译成<span\x20style=\x22color:\x20red\x22>[' + _0x479252[_0x29f6b6(0x230)] + _0x29f6b6(0x1b9) : _0x479252[_0x29f6b6(0x262)] ? _0x29f6b6(0x290) : _0x29f6b6(0x249);
    }
}

function getErrorPlaceholderText() {
    return '<span\x20style=\x22color:\x20red\x22>输入框初始化失败,发送不会翻译,请刷新窗口后重试.</span>';
}

function getPlaceholderTextNoHtml(_0xb01f7c, _0xe52ab6, _0x277b44) {
    const _0x292dda = a0_0x1f81d8;
    if (_0xb01f7c) {
        if (!_0xb01f7c[_0x292dda(0x262)] && _0xe52ab6) return _0x292dda(0x1e0);
        return _0xb01f7c['sendStatus'] ? _0xb01f7c[_0x292dda(0x262)] ? _0x292dda(0x1df) + _0xb01f7c[_0x292dda(0x272)] + _0x292dda(0x244) + _0xb01f7c[_0x292dda(0x230)] + ']发送' : _0x292dda(0x1f4) + _0xb01f7c[_0x292dda(0x272)] + ']线路翻译成[' + _0xb01f7c[_0x292dda(0x230)] + _0x292dda(0x267) : _0xb01f7c[_0x292dda(0x262)] ? '采用[对话]翻译设置,发送开关\x20关闭\x20,消息内容不翻译发送' : _0x292dda(0x1bd);
    }
}

function selectText(_0x465714) {
    const _0x4a8af8 = a0_0x1f81d8;
    try {
        _0x465714['focus']();
        if (document[_0x4a8af8(0x1c7)]) {
            const _0x48f5b7 = document[_0x4a8af8(0x23a)][_0x4a8af8(0x226)]();
            _0x48f5b7[_0x4a8af8(0x1f1)](_0x465714), _0x48f5b7['select']();
        } else window[_0x4a8af8(0x1b8)] && window[_0x4a8af8(0x1b8)]()[_0x4a8af8(0x276)](_0x465714);
    } catch (_0x835845) {
        console[_0x4a8af8(0x1ef)](_0x835845);
    }
}

function selectAll(_0x35c942) {
    const _0x1b938f = a0_0x1f81d8;
    let _0x35a809;
    try {
        _0x35c942['focus']();
        if (window[0x0]) {
            if (window[0x0]['document'][_0x1b938f(0x1c7)]) _0x35a809 = window[0x0][_0x1b938f(0x241)][_0x1b938f(0x23a)]['createTextRange'](), _0x35a809[_0x1b938f(0x1f1)](_0x35c942), _0x35a809['select']();
            else window[0x0][_0x1b938f(0x1b8)] && window[0x0][_0x1b938f(0x1b8)]()['selectAllChildren'](_0x35c942);
        } else {
            if (document[_0x1b938f(0x1c7)]) _0x35a809 = document['body']['createTextRange'](), _0x35a809['moveToElementText'](_0x35c942), _0x35a809[_0x1b938f(0x1ce)]();
            else window[_0x1b938f(0x1b8)] && window['getSelection']()['selectAllChildren'](_0x35c942);
        }
    } catch (_0x42880a) {
        console[_0x1b938f(0x1ef)](_0x42880a);
    }
}

function selectTextTelegram(_0x951a07) {
    const _0xd7a90e = a0_0x1f81d8;
    try {
        _0x951a07[_0xd7a90e(0x265)]();
        if (document['selection']) {
            const _0x474657 = document[_0xd7a90e(0x23a)][_0xd7a90e(0x226)]();
            _0x474657[_0xd7a90e(0x1f1)](_0x951a07), _0x474657['select']();
        } else window[_0xd7a90e(0x1b8)] && window['getSelection']()[_0xd7a90e(0x276)](_0x951a07);
    } catch (_0x1c0878) {
        console[_0xd7a90e(0x1ef)](_0x1c0878);
    }
}

function replaceInput(_0x1a64c4, _0x2a7dce) {
    const _0x292a3e = a0_0x1f81d8;
    try {
        let _0x30e28e = null;
        try {
            _0x30e28e = new DataTransfer();
        } catch (_0x4d3932) {}
        const _0x2e18bd = new ClipboardEvent(_0x292a3e(0x253), {
            'clipboardData': _0x30e28e
        });
        _0x2e18bd[_0x292a3e(0x1d4)]['setData'](_0x292a3e(0x27a), _0x2a7dce), _0x1a64c4[_0x292a3e(0x265)](), _0x1a64c4[_0x292a3e(0x212)] = function (_0x4306d4) {}, _0x1a64c4[_0x292a3e(0x224)](_0x2e18bd);
    } catch (_0x4faf29) {
        console[_0x292a3e(0x1ef)](_0x4faf29);
    }
}

function pasteText(_0x50981a, _0x343742) {
    const _0x5616af = a0_0x1f81d8;
    try {
        const _0x375873 = new ClipboardEvent(_0x5616af(0x253), {
            'bubbles': !![],
            'cancelable': !![],
            'clipboardData': new DataTransfer()
        });
        _0x375873[_0x5616af(0x1d4)][_0x5616af(0x259)](_0x5616af(0x27a), _0x343742), _0x50981a['focus'](), _0x50981a['dispatchEvent'](_0x375873);
    } catch (_0x4656fd) {
        console[_0x5616af(0x1ef)](_0x4656fd);
    }
}

function pasteTextTwitter(_0x3ef3c0, _0x50e040) {
    const _0x55fb2f = a0_0x1f81d8;
    try {
        const _0x2b25c9 = Object[_0x55fb2f(0x1dc)](new Event(_0x55fb2f(0x253), {
            'bubbles': !![],
            'cancelable': !![]
        }), {
            'clipboardData': {
                'dropEffect': _0x55fb2f(0x288),
                'effectAllowed': 'uninitialized',
                'files': [],
                'items': [],
                'getData': () => _0x50e040,
                'types': [_0x55fb2f(0x27a)]
            }
        });
        _0x3ef3c0[_0x55fb2f(0x265)](), _0x3ef3c0[_0x55fb2f(0x224)](_0x2b25c9);
    } catch (_0x16226a) {
        console[_0x55fb2f(0x1ef)](_0x16226a);
    }
}

function a0_0x4d4f(_0x285687, _0x2253fa) {
    const _0x19be1e = a0_0x19be();
    return a0_0x4d4f = function (_0x4d4f5f, _0x1032bd) {
        _0x4d4f5f = _0x4d4f5f - 0x1b6;
        let _0x2f51d5 = _0x19be1e[_0x4d4f5f];
        return _0x2f51d5;
    }, a0_0x4d4f(_0x285687, _0x2253fa);
}

function replaceInputTelegram(_0x3913f0, _0x27d211) {
    const _0x51b53a = a0_0x1f81d8;
    try {
        _0x3913f0[_0x51b53a(0x23d)] = _0x27d211;
        if (_0x51b53a(0x231) in document) {
            const _0x3e1b4d = document[_0x51b53a(0x231)](_0x51b53a(0x27f));
            _0x3e1b4d[_0x51b53a(0x1e8)](_0x51b53a(0x28c), !![], !![]), _0x3913f0[_0x51b53a(0x224)](_0x3e1b4d);
        } else _0x3913f0['fireEvent'](_0x51b53a(0x28c));
    } catch (_0x3c067) {
        console[_0x51b53a(0x1ef)](_0x3c067);
    }
}

function getChatHistoryStorage(_0x1f1016) {
    const _0x18c05a = a0_0x1f81d8;
    return ipcRenderer[_0x18c05a(0x225)](_0x18c05a(0x27b), _0x1f1016);
}

function getChatAudioHistoryStorage(_0x40af76) {
    const _0x4cdbb4 = a0_0x1f81d8;
    return ipcRenderer[_0x4cdbb4(0x225)](_0x4cdbb4(0x1f6), _0x40af76);
}

function getUserPackage(_0x367ddf) {
    const _0x2c2e41 = a0_0x1f81d8;
    if (!_0x367ddf) {
        const _0x2a2955 = sessionStorage[_0x2c2e41(0x274)](accountKey);
        if (_0x2a2955) return JSON[_0x2c2e41(0x292)](_0x2a2955);
    }
    const _0x111afb = ipcRenderer[_0x2c2e41(0x225)](_0x2c2e41(0x235), null);
    return _0x111afb && sessionStorage[_0x2c2e41(0x282)](accountKey, _0x111afb), JSON['parse'](_0x111afb);
}

function setTranslateLoading(_0x15023a, _0x265005) {
    const _0x20e019 = a0_0x1f81d8;
    try {
        _0x15023a ? _0x265005 ? u(_0x20e019(0x242))[_0x20e019(0x217)]()[_0x20e019(0x258)][_0x20e019(0x1fb)] = _0x265005 : u(_0x20e019(0x242))[_0x20e019(0x217)]()[_0x20e019(0x258)]['display'] = 'block' : u(_0x20e019(0x242))[_0x20e019(0x217)]()['style'][_0x20e019(0x1fb)] = _0x20e019(0x288);
    } catch (_0x47084b) {}
}

function setTranslateMessage(_0x566e3f, _0x14627f) {
    const _0x3dc13b = a0_0x1f81d8;
    try {
        _0x566e3f ? (u('#fb-translateMessage')[_0x3dc13b(0x217)]()['style']['display'] = _0x3dc13b(0x295), u('#fb-translateMessage')[_0x3dc13b(0x273)](_0x14627f)) : u(_0x3dc13b(0x1fa))[_0x3dc13b(0x217)]()['style'][_0x3dc13b(0x1fb)] = _0x3dc13b(0x288);
    } catch (_0x41d6e6) {}
}

function historyTranslate(_0xcd3258, _0x5ed4e1, _0x26863b, _0x1b903c, _0x32af60, _0x5146ee, _0x495443, _0x16551d) {
    const _0x59d9cc = a0_0x1f81d8;
    if (_0xcd3258[_0x59d9cc(0x207)]()[_0x59d9cc(0x21f)] <= 0x0) return;
    if (isNumber(_0xcd3258)) return;
    const _0x184d0e = _0x26863b + '-' + _0x1b903c + ':' + _0xcd3258,
        _0x289ead = getChatHistoryStorage(_0x184d0e);
    if (_0x289ead) {
        success(_0x5ed4e1, _0x5146ee, _0x289ead, _0x495443);
        return;
    }
    const _0x389ec7 = getUserPackage();
    if (_0x389ec7[_0x59d9cc(0x1cc)] === 0x2) {
        let _0x104b45 = _0x389ec7['currentTime'];
        !_0x104b45 && (_0x104b45 = Date[_0x59d9cc(0x1e9)]()), _0x104b45 < _0x389ec7[_0x59d9cc(0x1f8)] ? processLocalQueue(_0x5ed4e1, _0xcd3258, _0x26863b, _0x1b903c, _0x5146ee, _0x495443, _0x16551d, !![], _0x32af60)[_0x59d9cc(0x1cb)]() : error(_0xcd3258, _0x5ed4e1, _0x5146ee, _0x59d9cc(0x227), _0x495443, _0x26863b, _0x1b903c, null, historyTranslate, _0x16551d);
    }
    _0x389ec7['packageType'] === 0x1 && processServiceQueue(_0x5ed4e1, _0x32af60, null, {
        'text': _0xcd3258,
        'from': _0x26863b,
        'to': _0x1b903c,
        'sendTag': _0x5146ee
    }, _0x495443)['then']();
}

function historyTranslateAgain(_0x23ada1, _0x11e2dd, _0x5d8874, _0x31ea8c, _0x313b35, _0xdaa29b, _0x54aabd, _0x1582d1) {
    const _0x5653b3 = a0_0x1f81d8;
    if (_0x23ada1[_0x5653b3(0x207)]()[_0x5653b3(0x21f)] <= 0x0) return;
    if (isNumber(_0x23ada1)) return;
    const _0x4c8035 = getUserPackage();
    if (_0x4c8035[_0x5653b3(0x1cc)] === 0x2) {
        let _0x15b056 = _0x4c8035[_0x5653b3(0x285)];
        !_0x15b056 && (_0x15b056 = Date[_0x5653b3(0x1e9)]()), _0x15b056 < _0x4c8035[_0x5653b3(0x1f8)] ? processLocalQueue(_0x11e2dd, _0x23ada1, _0x5d8874, _0x31ea8c, _0xdaa29b, _0x54aabd, _0x1582d1, !![], _0x313b35)[_0x5653b3(0x1cb)]() : error(_0x23ada1, _0x11e2dd, _0xdaa29b, _0x5653b3(0x227), _0x54aabd, _0x5d8874, _0x31ea8c, null, historyTranslate, _0x1582d1);
    }
    _0x4c8035[_0x5653b3(0x1cc)] === 0x1 && processServiceQueue(_0x11e2dd, _0x313b35, null, {
        'text': _0x23ada1,
        'from': _0x5d8874,
        'to': _0x31ea8c,
        'sendTag': _0xdaa29b
    }, _0x54aabd)[_0x5653b3(0x1cb)]();
}

function messageIn(_0x52a0bb, _0x3e84a8, _0x380b22, _0x4f953e, _0x29a180, _0x14ee3f, _0x5dcb1f) {
    const _0x1571f2 = a0_0x1f81d8;
    console[_0x1571f2(0x239)]('messageIn');
    let _0x3ae86d = ![];
    const _0x1edeb5 = languageGet(_0x380b22);
    if (_0x1edeb5) {
        if (!_0x1edeb5[_0x1571f2(0x262)] && _0x4f953e) return;
        if (_0x52a0bb[_0x1571f2(0x207)]()[_0x1571f2(0x21f)] <= 0x0) return;
        if (isNumber(_0x52a0bb)) return;
        try {
            if (require(_0x1571f2(0x1e6))[_0x1571f2(0x275)](_0x52a0bb) * 0x2 === _0x52a0bb[_0x1571f2(0x21f)]) return;
        } catch (_0x389900) {}
        if (!_0x1edeb5[_0x1571f2(0x281)] && includeChinese(_0x52a0bb)) return;
        const _0x5f53cf = _0x1edeb5[_0x1571f2(0x216)] + '-' + _0x1edeb5[_0x1571f2(0x1ed)] + ':' + _0x52a0bb,
            _0x34a369 = getChatHistoryStorage(_0x5f53cf);
        if (_0x34a369) {
            success(_0x3e84a8, _0x3ae86d, _0x34a369, _0x14ee3f), addAfresh(_0x52a0bb, _0x3e84a8, _0x3ae86d, _0x52a0bb, _0x14ee3f, _0x380b22);
            return;
        }
        if (_0x1edeb5['receiveStatus'] && !_0x3ae86d) {
            if (!_0x1edeb5[_0x1571f2(0x22d)] && _0x29a180) {
                handle(_0x52a0bb, _0x3e84a8, _0x3ae86d, null, _0x14ee3f, _0x1edeb5[_0x1571f2(0x216)], _0x1edeb5[_0x1571f2(0x1ed)], _0x1edeb5['receiveApiUrl'], historyTranslate, _0x1edeb5['receiveCode']);
                return;
            }
            historyTranslate(_0x52a0bb, _0x3e84a8, _0x1edeb5[_0x1571f2(0x216)], _0x1edeb5['receiveOut'], _0x1edeb5[_0x1571f2(0x294)], _0x3ae86d, _0x14ee3f, _0x1edeb5[_0x1571f2(0x1d1)]);
        } else handle(_0x52a0bb, _0x3e84a8, _0x3ae86d, null, _0x14ee3f, _0x1edeb5[_0x1571f2(0x216)], _0x1edeb5[_0x1571f2(0x1ed)], _0x1edeb5[_0x1571f2(0x294)], historyTranslate, _0x1edeb5[_0x1571f2(0x1d1)]);
    } else setTimeout(() => {
        messageIn(_0x52a0bb, _0x3e84a8, _0x380b22, _0x4f953e, _0x29a180, _0x14ee3f);
    }, 0xc8);
}

function messageOut(_0xedf87a, _0x709d3d, _0x4d93f6, _0x1266fb, _0x59f31c, _0xeeb365, _0x311b01) {
    const _0x37a39e = a0_0x1f81d8;
    let _0x33edbe = !![];
    const _0x526ba8 = languageGet(_0x4d93f6);
    if (_0x526ba8) {
        if (!_0x526ba8[_0x37a39e(0x262)] && _0x1266fb) return;
        if (_0x33edbe) {
            if (_0xedf87a[_0x37a39e(0x207)]()[_0x37a39e(0x21f)] <= 0x0) return;
            if (isChinese(_0xedf87a)) return;
            if (isNumber(_0xedf87a)) return;
            try {
                if (require(_0x37a39e(0x1e6))['getTextLength'](_0xedf87a) * 0x2 === _0xedf87a[_0x37a39e(0x21f)]) return;
            } catch (_0x5e9e78) {}
            if (!_0x526ba8['chineseStatus'] && includeChinese(_0xedf87a)) return;
            const _0x431b69 = _0x526ba8[_0x37a39e(0x216)] + '-' + _0x526ba8[_0x37a39e(0x1ed)] + ':' + _0xedf87a,
                _0x27d837 = getChatHistoryStorage(_0x431b69);
            if (_0x27d837) {
                success(_0x709d3d, _0x33edbe, _0x27d837, _0xeeb365);
                return;
            }
            if (_0x526ba8[_0x37a39e(0x252)]) {
                if (!_0x526ba8['groupStatus'] && _0x59f31c) {
                    handle(_0xedf87a, _0x709d3d, _0x33edbe, null, _0xeeb365, _0x526ba8['receiveIn'], _0x526ba8[_0x37a39e(0x1ed)], _0x526ba8[_0x37a39e(0x294)], historyTranslate, _0x526ba8[_0x37a39e(0x1d1)]);
                    return;
                }
                historyTranslate(_0xedf87a, _0x709d3d, _0x526ba8[_0x37a39e(0x216)], _0x526ba8['receiveOut'], _0x526ba8[_0x37a39e(0x294)], _0x33edbe, _0xeeb365, _0x526ba8[_0x37a39e(0x26a)]);
            } else handle(_0xedf87a, _0x709d3d, _0x33edbe, null, _0xeeb365, _0x526ba8[_0x37a39e(0x216)], _0x526ba8[_0x37a39e(0x1ed)], _0x526ba8[_0x37a39e(0x294)], historyTranslate, _0x526ba8[_0x37a39e(0x1d1)]);
        }
    } else setTimeout(() => {
        messageOut(_0xedf87a, _0x709d3d, _0x4d93f6, _0x1266fb, _0x59f31c, _0xeeb365);
    }, 0x64);
}

function initPlugs() {
    const _0x580121 = a0_0x1f81d8;
    if (!document[_0x580121(0x21b)](_0x580121(0x23f))) {
        const _0x51e64f = path[_0x580121(0x25e)](__dirname, _0x580121(0x1c3)),
            _0x426d35 = fs[_0x580121(0x245)](_0x51e64f),
            _0x2ddd3a = document[_0x580121(0x243)](_0x580121(0x258));
        _0x2ddd3a['innerHTML'] = _0x426d35, _0x2ddd3a['id'] = 'fb-plugs-chunk-vendors-class', document['head'][_0x580121(0x22b)](_0x2ddd3a);
    }
    if (!document[_0x580121(0x21b)](_0x580121(0x256))) {
        const _0x250f37 = path[_0x580121(0x25e)](__dirname, _0x580121(0x22c)),
            _0x26168a = fs[_0x580121(0x245)](_0x250f37),
            _0x425c3d = document[_0x580121(0x243)](_0x580121(0x258));
        _0x425c3d[_0x580121(0x23d)] = _0x26168a, _0x425c3d['id'] = _0x580121(0x256), document[_0x580121(0x1c2)][_0x580121(0x22b)](_0x425c3d);
    }
    const _0x7302c3 = () => {
        return new Promise((_0x55d02c, _0x3ff1bf) => {
            const _0x1a2d1d = a0_0x4d4f;
            try {
                const _0x3f10c2 = require(_0x1a2d1d(0x26b));
                _0x55d02c(_0x3f10c2);
            } catch (_0x2b5a8b) {
                console[_0x1a2d1d(0x239)](_0x2b5a8b), _0x3ff1bf(_0x2b5a8b);
            }
        });
    };
    _0x7302c3()['then'](async _0x5a1748 => {
        const _0x36ae1e = _0x580121;
        try {
            await require(path[_0x36ae1e(0x25e)](__dirname, '../plugs/js/app.js'));
        } catch (_0x391853) {
            console[_0x36ae1e(0x239)](_0x391853);
        }
    })[_0x580121(0x240)](_0x10082 => {
        const _0x36e2ee = _0x580121;
        console[_0x36e2ee(0x1ef)](_0x36e2ee(0x1c0), _0x10082);
    });
}

function initUserPanel(_0x42d412, _0x3f8c55) {
    const _0x3d600c = a0_0x1f81d8;
    if (u(_0x42d412)[_0x3d600c(0x1db)]()[_0x3d600c(0x200)]('#panel-tools-translate')[_0x3d600c(0x21f)] <= 0x0) {
        const _0x2113c9 = document['createElement']('div');
        _0x2113c9['id'] = 'panel-tools-translate', _0x2113c9[_0x3d600c(0x24c)] = _0x3d600c(0x1f9), _0x2113c9[_0x3d600c(0x258)] = _0x3d600c(0x27e), _0x2113c9[_0x3d600c(0x23d)] = _0x3d600c(0x1ec), _0x2113c9[_0x3d600c(0x21d)](_0x3d600c(0x25f), () => {
            const _0x150134 = _0x3d600c;
            event[_0x150134(0x236)]();
            const _0x3a7726 = {
                'type': 'openUserTranslateConfig'
            };
            window[_0x150134(0x1c8)](_0x3a7726, '*');
        }), u(_0x42d412)[_0x3d600c(0x1e7)](_0x2113c9);
    }
    if (u(_0x42d412)[_0x3d600c(0x1db)]()['find']('#panel-tools-user')[_0x3d600c(0x21f)] <= 0x0) {
        const _0x2cb63f = document['createElement']('div');
        _0x2cb63f['id'] = _0x3d600c(0x1f7), _0x2cb63f['className'] = 'popover-container', _0x2cb63f[_0x3d600c(0x258)] = _0x3d600c(0x27e), _0x2cb63f[_0x3d600c(0x23d)] = _0x3d600c(0x238), _0x2cb63f[_0x3d600c(0x21d)](_0x3d600c(0x25f), () => {
            const _0x3614e7 = _0x3d600c;
            event[_0x3614e7(0x236)]();
            const _0x163ed4 = {
                'type': _0x3614e7(0x20d)
            };
            window[_0x3614e7(0x1c8)](_0x163ed4, '*');
        }), u(_0x42d412)[_0x3d600c(0x1e7)](_0x2cb63f);
    }
    if (u(_0x42d412)['parent']()[_0x3d600c(0x200)](_0x3d600c(0x21a))[_0x3d600c(0x21f)] <= 0x0) {
        const _0x53b6ed = document[_0x3d600c(0x243)](_0x3d600c(0x1ea));
        _0x53b6ed['id'] = 'panel-tools-group', _0x53b6ed[_0x3d600c(0x24c)] = _0x3d600c(0x1f9), _0x3f8c55 ? _0x53b6ed[_0x3d600c(0x258)] = 'margin-left:10px;padding:\x208px;cursor:\x20pointer;' : _0x53b6ed[_0x3d600c(0x258)] = _0x3d600c(0x251), _0x53b6ed[_0x3d600c(0x23d)] = _0x3d600c(0x1da), _0x53b6ed[_0x3d600c(0x21d)](_0x3d600c(0x25f), () => {
            const _0x5a9ca2 = _0x3d600c;
            event[_0x5a9ca2(0x236)]();
            const _0x5e9055 = {
                'type': 'openCustomerTab'
            };
            window[_0x5a9ca2(0x1c8)](_0x5e9055, '*');
        }), u(_0x42d412)[_0x3d600c(0x1e7)](_0x53b6ed);
    }
}

function fetchChatUserConfig(_0x36c9ee) {
    const _0x4c38b8 = userLanguageGet(_0x36c9ee);
    !_0x4c38b8 && window['postMessage']({
        'type': 'fetchUserTranslateConfig'
    }, '*');
}

function languageGet(_0x2f3e2e) {
    const _0xa7583a = a0_0x1f81d8;
    if (_0x2f3e2e) {
        const _0x53820b = sessionStorage[_0xa7583a(0x274)](languageKey + '-' + _0x2f3e2e);
        if (_0x53820b) {
            const _0x240d57 = JSON['parse'](_0x53820b);
            return _0x240d57['fontSize'] && (fontSize = _0x240d57[_0xa7583a(0x1ff)]), _0x240d57[_0xa7583a(0x26c)] && (fontColor = _0x240d57['fontColor']), changeFontAndColor(_0x240d57), !_0x240d57[_0xa7583a(0x1ca)] && (_0x240d57[_0xa7583a(0x1ca)] = 'en-US'), _0x240d57;
        }
    }
    const _0x5f4999 = sessionStorage[_0xa7583a(0x274)](languageKey);
    if (_0x5f4999) {
        const _0x134bc9 = JSON[_0xa7583a(0x292)](_0x5f4999);
        return _0x134bc9[_0xa7583a(0x1ff)] && (fontSize = _0x134bc9[_0xa7583a(0x1ff)]), _0x134bc9['fontColor'] && (fontColor = _0x134bc9[_0xa7583a(0x26c)]), !_0x134bc9[_0xa7583a(0x1ca)] && (_0x134bc9[_0xa7583a(0x1ca)] = 'en-US'), changeFontAndColor(_0x134bc9), _0x134bc9;
    }
    return null;
}

function userLanguageGet(_0x50090e) {
    const _0x2cb15d = a0_0x1f81d8;
    if (_0x50090e) {
        const _0x5ce955 = sessionStorage[_0x2cb15d(0x274)](languageKey + '-' + _0x50090e);
        if (_0x5ce955) {
            const _0x5247db = JSON[_0x2cb15d(0x292)](_0x5ce955);
            return _0x5247db[_0x2cb15d(0x1ff)] && (fontSize = _0x5247db['fontSize']), _0x5247db['fontColor'] && (fontColor = _0x5247db[_0x2cb15d(0x26c)]), changeFontAndColor(_0x5247db), !_0x5247db['audioCode'] && (_0x5247db[_0x2cb15d(0x1ca)] = 'en-US'), _0x5247db;
        }
    }
    return null;
}

function userLanguageSave(_0x541b17, _0x3ada92) {
    const _0x49765b = a0_0x1f81d8;
    changeFontAndColor(_0x541b17), sessionStorage[_0x49765b(0x282)](languageKey + '-' + _0x3ada92, JSON[_0x49765b(0x257)](_0x541b17));
    const _0x239a71 = sessionStorage[_0x49765b(0x274)](_0x49765b(0x27c)),
        _0x2075d1 = sessionStorage[_0x49765b(0x274)](_0x49765b(0x20e));
    ipcRenderer['send']('chat-language-save', _0x239a71 + '-' + _0x2075d1 + '-' + _0x3ada92, JSON['stringify'](_0x541b17));
}

function userLanguageRemove(_0x3d9a46) {
    const _0x2b457e = a0_0x1f81d8;
    sessionStorage[_0x2b457e(0x202)](languageKey + '-' + _0x3d9a46);
    const _0xb3ab5b = sessionStorage[_0x2b457e(0x274)](_0x2b457e(0x27c)),
        _0x57c61f = sessionStorage['getItem']('WSUserId');
    ipcRenderer[_0x2b457e(0x233)]('chat-language-remove', _0xb3ab5b + '-' + _0x57c61f + '-' + _0x3d9a46);
    const _0x3635d3 = languageGet(_0x3d9a46);
    _0x3635d3 && changeFontAndColor(_0x3635d3);
}

function changeFontAndColor(_0xffc150) {
    const _0x3b4a7a = a0_0x1f81d8,
        _0x4622db = document[_0x3b4a7a(0x27d)](_0x3b4a7a(0x1bf));
    _0x4622db[_0x3b4a7a(0x21e)](function (_0xa23904) {
        const _0x4811fa = _0x3b4a7a;
        _0xa23904[_0x4811fa(0x258)]['fontSize'] = _0xffc150[_0x4811fa(0x1ff)] + 'px', _0xa23904['style']['color'] = _0xffc150[_0x4811fa(0x26c)], _0xa23904['style'][_0x4811fa(0x232)] = 0x1, fontSize = _0xffc150['fontSize'], fontColor = _0xffc150[_0x4811fa(0x26c)];
    });
    const _0x3a1dc8 = document[_0x3b4a7a(0x21b)](_0x3b4a7a(0x1dd));
    _0x3a1dc8 && (_0x3a1dc8[_0x3b4a7a(0x258)][_0x3b4a7a(0x228)] = _0xffc150['fontColor'], _0x3a1dc8[_0x3b4a7a(0x258)][_0x3b4a7a(0x1ff)] = _0xffc150[_0x3b4a7a(0x1ff)]);
}

function changeAISuggest(_0x117ce6) {
    const _0x284df9 = a0_0x1f81d8,
        _0x17ce91 = document[_0x284df9(0x27d)]('.ai-suggest-span');
    _0x17ce91[_0x284df9(0x21e)](function (_0x805002) {
        const _0x413947 = _0x284df9;
        _0x117ce6 ? _0x805002[_0x413947(0x258)][_0x413947(0x1fb)] = _0x413947(0x260) : _0x805002[_0x413947(0x258)][_0x413947(0x1fb)] = 'none';
    });
}

function generateSuggest(_0x21b7c1, _0x118218, _0x179cd9, _0x18c1d8) {
    const _0xd4b566 = a0_0x1f81d8;
    try {
        const _0x20790c = sessionStorage[_0xd4b566(0x274)](accountKey);
        if (_0x20790c && JSON[_0xd4b566(0x292)](_0x20790c)[_0xd4b566(0x1cc)] === 0x2) return;
        if (u(_0x21b7c1)[_0xd4b566(0x1db)]()['find']('.ai-suggest-span')[_0xd4b566(0x21f)] > 0x0) return;
        const _0x183943 = document[_0xd4b566(0x243)]('div');
        _0x183943[_0xd4b566(0x24c)] = 'ai-suggest-span', _0x183943[_0xd4b566(0x23d)] = _0xd4b566(0x1bb);
        const _0xc4bf7f = sessionStorage[_0xd4b566(0x274)](_0xd4b566(0x203));
        _0xc4bf7f && JSON['parse'](_0xc4bf7f)[_0xd4b566(0x23b)] ? _0x183943[_0xd4b566(0x258)]['display'] = _0xd4b566(0x260) : _0x183943[_0xd4b566(0x258)][_0xd4b566(0x1fb)] = 'none', _0x183943[_0xd4b566(0x21d)](_0xd4b566(0x25f), () => {
            const _0x358e64 = _0xd4b566;
            event[_0x358e64(0x236)]();
            const _0x1e9e49 = u(_0x179cd9)[_0x358e64(0x280)](),
                _0x579b7c = {
                    'type': 'fetchAISuggest',
                    'content': _0x118218,
                    'translate': _0x1e9e49
                };
            window['postMessage'](_0x579b7c, '*');
        }), _0x18c1d8 === _0xd4b566(0x1e7) && u(_0x21b7c1)[_0xd4b566(0x1e7)](_0x183943), _0x18c1d8 === _0xd4b566(0x28b) && u(_0x21b7c1)[_0xd4b566(0x28b)](_0x183943), _0x18c1d8 === 'append' && u(_0x21b7c1)['append'](_0x183943), _0x18c1d8 === 'prepend' && u(_0x21b7c1)['prepend'](_0x183943);
    } catch (_0x50d7d2) {
        console[_0xd4b566(0x239)](_0x50d7d2);
    }
}

function includeChinese(_0xb03971) {
    const _0x4a3056 = a0_0x1f81d8;
    let _0x12d064 = 0x0;
    for (let _0x1b66c0 = 0x0; _0x1b66c0 < _0xb03971[_0x4a3056(0x21f)]; _0x1b66c0++) {
        if (isChinese(_0xb03971[_0x4a3056(0x1c4)](_0x1b66c0))) _0x12d064++;
    }
    return _0x12d064 > 0x0;
}

function sendServerApi(_0x3e4326, _0x2bbc3d, _0x20edc8, _0x4d7779, _0x426b7e) {
    return new Promise(async (_0x1fe556, _0x8edaf6) => {
        const _0x2e496e = a0_0x4d4f,
            _0x455071 = JSON['stringify']({
                'text': _0x2bbc3d,
                'from': _0x20edc8,
                'to': _0x4d7779
            }),
            _0x23cee8 = new XMLHttpRequest();
        _0x23cee8[_0x2e496e(0x1c9)](_0x2e496e(0x25a), _0x3e4326, !![]), await getHttp(_0x23cee8, getSUrl(_0x3e4326)), _0x23cee8[_0x2e496e(0x22e)] = function () {
            const _0x3cab27 = _0x2e496e;
            if (_0x23cee8['readyState'] === 0x4) {
                if (_0x23cee8[_0x3cab27(0x23b)] === 0xc8) {
                    const _0x5a121f = JSON[_0x3cab27(0x292)](_0x23cee8[_0x3cab27(0x24a)]);
                    let _0x5632d9, _0x2a5ec1 = _0x5a121f['code'];
                    if (_0x2a5ec1 === _0x3cab27(0x204)) {
                        const _0x9303d9 = JSON[_0x3cab27(0x292)](JSON['stringify'](_0x5a121f[_0x3cab27(0x20b)]));
                        _0x5632d9 = _0x9303d9[_0x3cab27(0x280)];
                        if (_0x9303d9[_0x3cab27(0x215)]) {
                            const _0x295851 = _0x9303d9[_0x3cab27(0x215)];
                            sessionStorage[_0x3cab27(0x282)](accountKey, JSON[_0x3cab27(0x257)](_0x295851));
                        }
                    } else _0x5632d9 = _0x5a121f[_0x3cab27(0x1b7)];
                    const _0x2287b9 = {
                        'code': _0x2a5ec1,
                        'text': _0x5632d9
                    };
                    _0x1fe556(_0x2287b9);
                } else _0x8edaf6(_0x23cee8[_0x3cab27(0x23b)]);
            }
        }, _0x23cee8[_0x2e496e(0x1fd)] = function () {
            const _0x3c2e5b = _0x2e496e;
            _0x8edaf6(_0x3c2e5b(0x1d7));
        }, _0x23cee8[_0x2e496e(0x233)](_0x455071);
    });
}

function setUserLangConfig() {
    const _0xfa9c55 = a0_0x1f81d8,
        _0x4d97ba = sessionStorage[_0xfa9c55(0x274)]('userId'),
        _0x390f96 = sessionStorage[_0xfa9c55(0x274)]('AppType');
    let _0x1d93cf = {
        'userId': _0x4d97ba,
        'appType': _0x390f96,
        'userAppId': '',
        'sendCode': 'youdao',
        'sendCodeName': '有道翻译',
        'receiveCode': 'youdao',
        'receiveCodeName': '有道翻译',
        'sendApiUrl': apiUrl + _0xfa9c55(0x25c),
        'receiveApiUrl': apiUrl + '/translate/youdao/text',
        'groupStatus': ![],
        'receiveStatus': !![],
        'receiveIn': _0xfa9c55(0x1eb),
        'receiveOut': 'zh',
        'receiveOutText': '中文',
        'sendStatus': !![],
        'sendIn': _0xfa9c55(0x1eb),
        'sendOut': 'en',
        'sendOutText': '英文',
        'fontSize': 0xf,
        'fontColor': _0xfa9c55(0x1ee),
        'chineseStatus': !![],
        'sendChineseStatus': !![]
    };
    sessionStorage[_0xfa9c55(0x282)](languageKey, JSON[_0xfa9c55(0x257)](_0x1d93cf));
}

function triggerInputEvent(_0x33fdd2) {
    const _0xeca181 = a0_0x1f81d8;
    let _0x343f88;
    if (typeof Event === 'function') _0x343f88 = new Event(_0xeca181(0x28c), {
        'bubbles': !![],
        'cancelable': !![]
    }), _0x33fdd2[_0xeca181(0x224)](_0x343f88);
    else {
        if (document[_0xeca181(0x231)]) _0x343f88 = document[_0xeca181(0x231)]('HTMLEvents'), _0x343f88[_0xeca181(0x1e8)](_0xeca181(0x28c), !![], !![]), _0x33fdd2[_0xeca181(0x224)](_0x343f88);
        else _0x33fdd2['fireEvent'] && _0x33fdd2[_0xeca181(0x229)](_0xeca181(0x278));
    }
}

function a0_0x19be() {
    const _0xf4cc52 = ['getTime', 'chat-audio-history-channel-get', 'panel-tools-user', 'expirationTime', 'popover-container', '#fb-translateMessage', 'display', '原文:', 'onerror', 'pointer', 'fontSize', 'find', 'width', 'removeItem', 'aiSuggestConfig', 'SUCCESS', 'addTask', 'characters', 'trim', '2129VpWrdf', 'chat_crms_token', 'raw', 'data', 'tag', 'openUserProfile', 'WSUserId', 'translation-span', '2859848cDfTCX', '9064572rCBoqC', 'onpaste', 'code', ']</span>线路翻译成<span\x20style=\x22color:\x20red\x22>[', 'account', 'receiveIn', 'first', 'umbrellajs', '100%', '#panel-tools-group', 'getElementById', 'electron', 'addEventListener', 'forEach', 'length', 'tencent/deduct', 'path', 'readyState', '500dHGARk', 'dispatchEvent', 'sendSync', 'createTextRange', '套餐到期', 'color', 'fireEvent', 'onclick', 'appendChild', '../plugs/css/app.css', 'groupStatus', 'onreadystatechange', 'append', 'sendOutText', 'createEvent', 'lineHeight', 'send', 'tencent/text', 'get-user-package', 'stopPropagation', '翻译结果包含中文，已取消发送', '<svg\x20t=\x221695310748935\x22\x20class=\x22icon\x22\x20viewBox=\x220\x200\x201024\x201024\x22\x20version=\x221.1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20p-id=\x226621\x22\x20width=\x2221\x22\x20height=\x2221\x22><path\x20d=\x22M960.284444\x20200.248889v623.502222H63.715556V200.248889h896.568888M1012.622222\x20147.911111H11.377778v728.177778h1001.244444V147.911111z\x22\x20fill=\x22#37ADDB\x22\x20p-id=\x226622\x22></path><path\x20d=\x22M564.679111\x20615.879111h237.112889v52.337778H564.679111zM564.679111\x20485.831111h316.188445v52.337778H564.679111zM564.679111\x20355.783111h316.188445v52.337778H564.679111zM343.722667\x20374.442667a59.505778\x2059.505778\x200\x201\x201-60.984889\x2059.505777\x2060.302222\x2060.302222\x200\x200\x201\x2060.984889-59.505777m0-52.337778a111.843556\x20111.843556\x200\x201\x200\x20113.208889\x20111.843555\x20112.64\x20112.64\x200\x200\x200-113.208889-111.843555z\x22\x20fill=\x22#37ADDB\x22\x20p-id=\x226623\x22></path><path\x20d=\x22M527.928889\x20701.895111h-52.337778a131.982222\x20131.982222\x200\x200\x200-263.850667\x200H159.288889a184.32\x20184.32\x200\x200\x201\x20368.526222\x200z\x22\x20fill=\x22#37ADDB\x22\x20p-id=\x226624\x22></path></svg>\x20<div\x20class=\x22popover-content\x22><p>客户备注设置</p></div>', 'log', 'body', 'status', 'https://api.chatcrms.com/api', 'innerHTML', 'deepl/text', 'fb-plugs-chunk-vendors-class', 'catch', 'document', '#fb-translateLoading', 'createElement', ']线路翻译成[', 'readFileSync', 'replace', '错误:翻译失败,', 'test', '采用<span\x20style=\x22color:\x20red\x22>[默认]</span>翻译设置,发送开关<span\x20style=\x22color:\x20red\x22>关闭</span>,消息内容不翻译发送', 'responseText', '/translate/audio/to/text', 'className', '译文:', '1338980mrXpJF', 'keys', 'Content-Type', 'margin-left:10px;padding:\x208px;cursor:\x20pointer;display:none;', 'receiveStatus', 'paste', 'from', '4NJdMXG', 'fb-plugs-app-class', 'stringify', 'style', 'setData', 'POST', 'language', '/translate/youdao/text', 'SystemSource', 'join', 'click', 'block', '<p\x20style=\x22margin-top:\x205px;text-align:\x20right;color:\x20#00A8FF;\x22>重译</p>', 'customerAppId', 'authorization', '/translate/lang/config/info', 'focus', 'exports', ']发送', 'tencent', '13jmXhyF', 'sendCode', '../plugs/js/chunk-vendors.js', 'fontColor', 'map', 'google/deduct', 'encode', 'google/text', 'google', 'sendCodeName', 'html', 'getItem', 'getTextLength', 'selectAllChildren', 'sign', 'oninput', 'cursor', 'text/plain', 'chat-history-channel-get', 'userId', 'querySelectorAll', 'margin-left:10px;padding:\x208px;cursor:\x20pointer;', 'HTMLEvents', 'text', 'chineseStatus', 'setItem', '3521856qhzCjf', '9UuXQfU', 'currentTime', '套餐已过期', 'endsWith', 'none', 'youdao/deduct', 'deepl/deduct', 'after', 'input', 'textContent', '错误:翻译失败,点击重试', '33blqBdI', '采用<span\x20style=\x22color:\x20red\x22>[对话]</span>翻译设置,发送开关<span\x20style=\x22color:\x20red\x22>关闭</span>,消息内容不翻译发送', 'youdao/text', 'parse', 'application/json', 'receiveApiUrl', 'flex', 'chat-history-channel-save', 'msg', 'getSelection', ']</span>发送', '翻译中...', '<svg\x20t=\x221716300189359\x22\x20style=\x22height:\x2020px;width:\x2020px;\x22\x20class=\x22icon\x22\x20viewBox=\x220\x200\x201024\x201024\x22\x20version=\x221.1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20p-id=\x225282\x22\x20width=\x22200\x22\x20height=\x22200\x22><path\x20d=\x22M512\x20512m-512\x200a512\x20512\x200\x201\x200\x201024\x200\x20512\x20512\x200\x201\x200-1024\x200Z\x22\x20fill=\x22#57A981\x22\x20p-id=\x225283\x22></path><path\x20d=\x22M809.96\x20448.847a173.435\x20173.435\x200\x200\x200-14.953-142.283\x20175.203\x20175.203\x200\x200\x200-188.649-84.037\x20175.753\x20175.753\x200\x200\x200-297.752\x2062.854\x20173.435\x20173.435\x200\x200\x200-115.855\x2084.037\x20175.203\x20175.203\x200\x200\x200\x2021.53\x20205.659\x20173.29\x20173.29\x200\x200\x200\x2014.78\x20142.312\x20175.348\x20175.348\x200\x200\x200\x20188.793\x2084.037\x20173.435\x20173.435\x200\x200\x200\x20130.663\x2058.304A175.493\x20175.493\x200\x200\x200\x20715.78\x20737.848a173.58\x20173.58\x200\x200\x200\x20115.826-84.037\x20175.493\x20175.493\x200\x200\x200-21.646-204.964zM548.517\x20814.235a129.707\x20129.707\x200\x200\x201-83.341-30.138l4.086-2.347\x20138.487-79.922a23.038\x2023.038\x200\x200\x200\x2011.36-19.734V486.867l58.536\x2033.846a2.057\x202.057\x200\x200\x201\x201.1\x201.507v161.786a130.518\x20130.518\x200\x200\x201-130.228\x20130.229zM268.587\x20694.67a129.533\x20129.533\x200\x200\x201-15.503-87.34l4.115\x202.463\x20138.603\x2079.95a22.342\x2022.342\x200\x200\x200\x2022.603\x200l169.32-97.627v67.577a2.318\x202.318\x200\x200\x201-0.956\x201.797l-140.255\x2080.878a130.402\x20130.402\x200\x200\x201-177.927-47.698z\x20m-36.513-301.606a129.968\x20129.968\x200\x200\x201\x2068.563-57.174V500.4a22.197\x2022.197\x200\x200\x200\x2011.244\x2019.589l168.508\x2097.222-58.536\x2033.847a2.202\x202.202\x200\x200\x201-2.057\x200L279.83\x20570.324a130.518\x20130.518\x200\x200\x201-47.757-177.955v0.695z\x20m480.953\x20111.711l-169.03-98.15\x2058.391-33.73a2.202\x202.202\x200\x200\x201\x202.058\x200l139.965\x2080.879a130.228\x20130.228\x200\x200\x201-19.59\x20234.869v-164.54a22.893\x2022.893\x200\x200\x200-11.794-19.328z\x20m58.247-87.601l-4.086-2.463-138.343-80.618a22.487\x2022.487\x200\x200\x200-22.748\x200l-169.175\x2097.628v-67.606a1.913\x201.913\x200\x200\x201\x200.811-1.768L577.7\x20281.585a130.402\x20130.402\x200\x200\x201\x20193.575\x20135.038v0.551zM404.988\x20536.999l-58.536-33.73a2.318\x202.318\x200\x200\x201-1.101-1.652V340.295a130.402\x20130.402\x200\x200\x201\x20213.715-100.062l-4.115\x202.318-138.459\x2079.922a23.038\x2023.038\x200\x200\x200-11.388\x2019.734L404.988\x20537z\x20m31.79-68.533l75.4-43.468\x2075.547\x2043.468v86.905l-75.257\x2043.468-75.546-43.468-0.145-86.905z\x22\x20fill=\x22#FFFFFF\x22\x20p-id=\x225284\x22></path></svg>', '采用<span\x20style=\x22color:\x20red\x22>[默认]</span>翻译设置,使用<span\x20style=\x22color:\x20red\x22>[', '采用[默认]翻译设置,发送开关\x20关闭,消息内容不翻译发送', '.translation-afresh', '.translation-span', '加载\x20chunk-vendors.js\x20出错:', 'deepl', 'head', '../plugs/css/chunk-vendors.css', 'charAt', 'time', 'reduce', 'selection', 'postMessage', 'open', 'audioCode', 'then', 'packageType', 'SHA-256', 'select', '机器人默认翻译<span\x20style=\x22color:\x20red\x22>关闭</span>,如需翻译开启对话翻译', 'sort', 'receiveCode', 'sendStatus', 'importKey', 'clipboardData', '4669620Wjpkht', '8421eYCXXK', '${http.statusText}', 'youdao', '☞点击翻译', '<svg\x20t=\x221695311385982\x22\x20class=\x22icon\x22\x20viewBox=\x220\x200\x201024\x201024\x22\x20version=\x221.1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20p-id=\x2217613\x22\x20id=\x22mx_n_1695311385983\x22\x20width=\x2221\x22\x20height=\x2221\x22><path\x20d=\x22M341.333333\x20426.666667\x20213.333333\x20426.666667\x20213.333333\x20298.666667\x20128\x20298.666667l0\x20128L0\x20426.666667l0\x2085.333333\x20128\x200\x200\x20128\x2085.333333\x200\x200-128\x20128\x200L341.333333\x20426.666667zM768\x20469.333333c72.533333\x200\x20128-55.466667\x20128-128\x200-72.533333-55.466667-128-128-128-12.8\x200-25.6\x204.266667-38.4\x204.266667C755.2\x20256\x20768\x20294.4\x20768\x20341.333333s-12.8\x2085.333333-38.4\x20123.733333C742.4\x20465.066667\x20755.2\x20469.333333\x20768\x20469.333333zM554.666667\x20469.333333c72.533333\x200\x20128-55.466667\x20128-128\x200-72.533333-55.466667-128-128-128-72.533333\x200-128\x2055.466667-128\x20128C426.666667\x20413.866667\x20482.133333\x20469.333333\x20554.666667\x20469.333333zM836.266667\x20563.2c34.133333\x2029.866667\x2059.733333\x2072.533333\x2059.733333\x20119.466667l0\x2085.333333\x20128\x200\x200-85.333333C1024\x20618.666667\x20921.6\x20576\x20836.266667\x20563.2zM554.666667\x20554.666667c-85.333333\x200-256\x2042.666667-256\x20128l0\x2085.333333\x20512\x200\x200-85.333333C810.666667\x20597.333333\x20640\x20554.666667\x20554.666667\x20554.666667z\x22\x20p-id=\x2217614\x22\x20fill=\x22#37ADDB\x22></path></svg>\x20<div\x20class=\x22popover-content\x22><p>用户分组设置</p></div>', 'parent', 'assign', 'translation-span-style', 'timeout', '采用[对话]翻译设置,使用[', '机器人默认翻译\x20关闭,如需翻译开启对话翻译', 'name', '3390TqroiF', 'translation-afresh', 'setRequestHeader', '采用<span\x20style=\x22color:\x20red\x22>[对话]</span>翻译设置,使用<span\x20style=\x22color:\x20red\x22>[', 'emoji-reader', 'before', 'initEvent', 'now', 'div', 'auto', '<svg\x20t=\x221695311751592\x22\x20class=\x22icon\x22\x20viewBox=\x220\x200\x201024\x201024\x22\x20version=\x221.1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20p-id=\x2221082\x22\x20id=\x22mx_n_1695311751593\x22\x20width=\x2220\x22\x20height=\x2220\x22><path\x20d=\x22M640\x20416h256c35.36\x200\x2064\x2028.48\x2064\x2064v416c0\x2035.36-28.48\x2064-64\x2064H480c-35.36\x200-64-28.48-64-64V640h128c53.312\x200\x2096-42.976\x2096-96V416zM64\x20128c0-35.36\x2028.48-64\x2064-64h416c35.36\x200\x2064\x2028.48\x2064\x2064v416c0\x2035.36-28.48\x2064-64\x2064H128c-35.36\x200-64-28.48-64-64V128z\x20m128\x20276.256h46.72v-24.768h67.392V497.76h49.504V379.488h68.768v20.64h50.88V243.36H355.616v-34.368c0-10.08\x201.376-18.784\x204.16-26.112a10.56\x2010.56\x200\x200\x200\x201.344-4.16c0-0.896-3.2-1.792-9.6-2.72h-46.816v67.36H192v160.896z\x20m46.72-122.368h67.392v60.48h-67.36V281.92z\x20m185.664\x2060.48h-68.768V281.92h68.768v60.48z\x20m203.84\x20488l19.264-53.632h100.384l19.264\x2053.632h54.976L732.736\x20576h-64.64L576\x20830.4h52.256z\x20m33.024-96.256l37.12-108.608h1.376l34.368\x20108.608h-72.864zM896\x20320h-64a128\x20128\x200\x200\x200-128-128v-64a192\x20192\x200\x200\x201\x20192\x20192zM128\x20704h64a128\x20128\x200\x200\x200\x20128\x20128v64a192\x20192\x200\x200\x201-192-192z\x22\x20fill=\x22#37ADDB\x22\x20p-id=\x2221083\x22></path></svg>\x20<div\x20class=\x22popover-content\x22><p>对话翻译设置</p></div>', 'receiveOut', '#5ac463', 'error', '/translate/customer/info', 'moveToElementText', 'sendTag', 'subtle', '采用[默认]翻译设置,使用['];
    a0_0x19be = function () {
        return _0xf4cc52;
    };
    return a0_0x19be();
}

function handleTranslate(_0x49c588, _0x5073b3, _0x4263fe, _0x143129, _0x2ac1d2, _0xfd0f78) {
    const _0x485500 = a0_0x1f81d8;
    _0xfd0f78 === void 0x0 && (_0xfd0f78 = !![]);
    const _0x7aa84f = getUserPackage();
    if (_0x7aa84f[_0x485500(0x1cc)] === 0x2) {
        let _0x12c171 = _0x7aa84f[_0x485500(0x285)];
        !_0x12c171 && (_0x12c171 = Date[_0x485500(0x1e9)]());
        if (_0x12c171 < _0x7aa84f['expirationTime']) sendLocalApi(_0x49c588, _0x5073b3, _0x4263fe, _0x143129, _0x2ac1d2)[_0x485500(0x1cb)](_0x16993b => {
            const _0x468685 = _0x485500;
            if (_0x16993b[_0x468685(0x213)] === _0x468685(0x204) && includeChinese(_0x16993b['text']) && _0xfd0f78 && _0x143129 !== 'ja' && _0x143129 !== 'jp') return new Promise((_0x1fb80c, _0x39ed22) => {
                const _0x3822ee = _0x468685,
                    _0x25aaeb = {
                        'code': _0x3822ee(0x1ef),
                        'text': _0x3822ee(0x237)
                    };
                _0x1fb80c(_0x25aaeb);
            });
            return new Promise((_0x26dcac, _0x54d6c0) => {
                _0x26dcac(_0x16993b);
            });
        });
        else return new Promise((_0x47679c, _0x5b2808) => {
            const _0xd753ba = _0x485500,
                _0x4f6879 = {
                    'code': _0xd753ba(0x1ef),
                    'text': _0xd753ba(0x286)
                };
            _0x47679c(_0x4f6879);
        });
    }
    if (_0x7aa84f['packageType'] === 0x1 && (_0x2ac1d2 === 'youdao' || _0x2ac1d2 === _0x485500(0x271) || _0x2ac1d2 === _0x485500(0x1c1) || _0x2ac1d2 === _0x485500(0x268))) {
        const _0x2eb196 = sessionStorage['getItem'](accountKey);
        if (_0x2eb196) try {
            const _0x158fb0 = JSON[_0x485500(0x292)](_0x2eb196);
            if (_0x158fb0[_0x485500(0x206)] && _0x158fb0[_0x485500(0x206)] > 0x1388 && _0x158fb0[_0x485500(0x20c)]) {
                if (_0x2ac1d2 === _0x485500(0x1d8)) return new Promise((_0x206bb0, _0x36b00c) => {
                    const _0x5f1225 = _0x485500;
                    let _0x5dda7f;
                    _0x143129 === 'zh' ? _0x5dda7f = '' : _0x5dda7f = _0x143129, youdao(_0x5073b3, _0x4263fe, _0x5dda7f)[_0x5f1225(0x1cb)](_0x110ad2 => {
                        const _0x34c13f = _0x5f1225;
                        if (_0x110ad2[_0x34c13f(0x213)] === _0x34c13f(0x204) && includeChinese(_0x110ad2[_0x34c13f(0x280)]) && _0xfd0f78 && _0x143129 !== 'ja' && _0x143129 !== 'jp') {
                            _0x110ad2[_0x34c13f(0x213)] = 'error', _0x110ad2[_0x34c13f(0x280)] = '翻译结果包含中文，已取消发送', _0x206bb0(_0x110ad2);
                            return;
                        }
                        _0x110ad2[_0x34c13f(0x213)] === _0x34c13f(0x204) && callDeductApi(_0x49c588[_0x34c13f(0x246)](_0x34c13f(0x291), _0x34c13f(0x289)), _0x5073b3, _0x4263fe, _0x143129)[_0x34c13f(0x1cb)](), _0x206bb0(_0x110ad2);
                    })[_0x5f1225(0x240)](_0xb2dc75 => {
                        const _0x5f58bf = _0x5f1225;
                        sendServerApi(_0x49c588, _0x5073b3, _0x4263fe, _0x143129)[_0x5f58bf(0x1cb)](_0x4221cd => {
                            _0x206bb0(_0x4221cd);
                        })['catch'](_0x464915 => {
                            _0x36b00c(_0x464915);
                        });
                    });
                });
                if (_0x2ac1d2 === 'google') return new Promise((_0x41d1f5, _0x2919b0) => {
                    const _0x2bae68 = _0x485500;
                    google(_0x5073b3, _0x4263fe, _0x143129)[_0x2bae68(0x1cb)](_0x3d9321 => {
                        const _0x9845f3 = _0x2bae68;
                        if (_0x3d9321['code'] === _0x9845f3(0x204) && includeChinese(_0x3d9321[_0x9845f3(0x280)]) && _0xfd0f78 && _0x143129 !== 'ja' && _0x143129 !== 'jp') {
                            _0x3d9321[_0x9845f3(0x213)] = _0x9845f3(0x1ef), _0x3d9321[_0x9845f3(0x280)] = _0x9845f3(0x237), _0x41d1f5(_0x3d9321);
                            return;
                        }
                        _0x3d9321[_0x9845f3(0x213)] === _0x9845f3(0x204) && callDeductApi(_0x49c588['replace'](_0x9845f3(0x270), _0x9845f3(0x26e)), _0x5073b3, _0x4263fe, _0x143129)[_0x9845f3(0x1cb)](), _0x41d1f5(_0x3d9321);
                    })[_0x2bae68(0x240)](_0x15ab72 => {
                        const _0x3a0ac4 = _0x2bae68;
                        sendServerApi(_0x49c588, _0x5073b3, _0x4263fe, _0x143129)[_0x3a0ac4(0x1cb)](_0x5d6446 => {
                            _0x41d1f5(_0x5d6446);
                        })['catch'](_0x52495e => {
                            _0x2919b0(_0x52495e);
                        });
                    });
                });
                if (_0x2ac1d2 === 'deepl') return new Promise((_0x5f6134, _0x55eb02) => {
                    const _0x30d460 = _0x485500;
                    deepl(_0x5073b3, _0x4263fe, _0x143129)[_0x30d460(0x1cb)](_0xfd6108 => {
                        const _0x157989 = _0x30d460;
                        if (_0xfd6108[_0x157989(0x213)] === _0x157989(0x204) && includeChinese(_0xfd6108[_0x157989(0x280)]) && _0xfd0f78 && _0x143129 !== 'ja' && _0x143129 !== 'jp') {
                            _0xfd6108[_0x157989(0x213)] = _0x157989(0x1ef), _0xfd6108['text'] = _0x157989(0x237), _0x5f6134(_0xfd6108);
                            return;
                        }
                        _0xfd6108['code'] === 'SUCCESS' && callDeductApi(_0x49c588[_0x157989(0x246)]('deepl/text', 'deepl/deduct'), _0x5073b3, _0x4263fe, _0x143129)[_0x157989(0x1cb)](), _0x5f6134(_0xfd6108);
                    })[_0x30d460(0x240)](_0x5d477e => {
                        const _0x4dcd99 = _0x30d460;
                        sendServerApi(_0x49c588, _0x5073b3, _0x4263fe, _0x143129)['then'](_0x49006a => {
                            _0x5f6134(_0x49006a);
                        })[_0x4dcd99(0x240)](_0x1ef868 => {
                            _0x55eb02(_0x1ef868);
                        });
                    });
                });
                if (_0x2ac1d2 === _0x485500(0x268)) return new Promise((_0x45c831, _0x257035) => {
                    const _0x1fc9cd = _0x485500;
                    tencent(_0x5073b3, _0x4263fe, _0x143129)[_0x1fc9cd(0x1cb)](_0xd5941a => {
                        const _0x220191 = _0x1fc9cd;
                        _0xd5941a[_0x220191(0x213)] === _0x220191(0x204) && callDeductApi(_0x49c588[_0x220191(0x246)](_0x220191(0x234), _0x220191(0x220)), _0x5073b3, _0x4263fe, _0x143129)[_0x220191(0x1cb)](), _0x45c831(_0xd5941a);
                    })['catch'](_0x247faf => {
                        const _0x3dc9ed = _0x1fc9cd;
                        sendServerApi(_0x49c588, _0x5073b3, _0x4263fe, _0x143129)[_0x3dc9ed(0x1cb)](_0x4b4094 => {
                            _0x45c831(_0x4b4094);
                        })[_0x3dc9ed(0x240)](_0x5a2bc9 => {
                            _0x257035(_0x5a2bc9);
                        });
                    });
                });
            }
        } catch (_0x4cb75a) {
            console['log'](_0x4cb75a);
        }
    }
    return sendServerApi(_0x49c588, _0x5073b3, _0x4263fe, _0x143129, _0xfd0f78)[_0x485500(0x1cb)](_0x3649ee => {
        const _0x179905 = _0x485500;
        if (_0x3649ee[_0x179905(0x213)] === _0x179905(0x204) && includeChinese(_0x3649ee[_0x179905(0x280)]) && _0xfd0f78 && _0x143129 !== 'ja' && _0x143129 !== 'jp') return new Promise((_0x975f52, _0x399ca2) => {
            const _0x51b7c4 = _0x179905,
                _0x51efe8 = {
                    'code': 'error',
                    'text': _0x51b7c4(0x237)
                };
            _0x975f52(_0x51efe8);
        });
        return new Promise((_0x5330f7, _0x2b816b) => {
            _0x5330f7(_0x3649ee);
        });
    });
}
async function sendLocalApi(_0x40ed72, _0x213c33, _0x3e58e9, _0x12cc67, _0x1cbe8d) {
    const _0x55d1e3 = a0_0x1f81d8;
    if (_0x1cbe8d === _0x55d1e3(0x1d8)) return new Promise((_0x1ae2b8, _0xca5889) => {
        const _0x35cb87 = _0x55d1e3;
        youdao(_0x213c33, _0x3e58e9, _0x12cc67)[_0x35cb87(0x1cb)](_0x1eb7a6 => {
            const _0x5b0307 = _0x35cb87;
            _0x1eb7a6[_0x5b0307(0x213)] === _0x5b0307(0x204) && callDeductApi(_0x40ed72[_0x5b0307(0x246)]('youdao/text', _0x5b0307(0x289)), _0x213c33, _0x3e58e9, _0x12cc67)[_0x5b0307(0x1cb)](), _0x1ae2b8(_0x1eb7a6);
        })['catch'](_0x1c3c0d => {
            const _0x43a6b8 = _0x35cb87;
            sendServerApi(_0x40ed72, _0x213c33, _0x3e58e9, _0x12cc67)['then'](_0x3dbc60 => {
                _0x1ae2b8(_0x3dbc60);
            })[_0x43a6b8(0x240)](_0x61aaf6 => {
                _0xca5889(_0x61aaf6);
            });
        });
    });
    if (_0x1cbe8d === 'google') return new Promise((_0xe45b2d, _0x4877ae) => {
        const _0x3e32b8 = _0x55d1e3;
        google(_0x213c33, _0x3e58e9, _0x12cc67)[_0x3e32b8(0x1cb)](_0x55bae7 => {
            const _0x3fff03 = _0x3e32b8;
            _0x55bae7['code'] === _0x3fff03(0x204) && callDeductApi(_0x40ed72['replace'](_0x3fff03(0x270), 'google/deduct'), _0x213c33, _0x3e58e9, _0x12cc67)[_0x3fff03(0x1cb)](), _0xe45b2d(_0x55bae7);
        })[_0x3e32b8(0x240)](_0x206eee => {
            const _0x1cd900 = _0x3e32b8;
            sendServerApi(_0x40ed72, _0x213c33, _0x3e58e9, _0x12cc67)['then'](_0x275655 => {
                _0xe45b2d(_0x275655);
            })[_0x1cd900(0x240)](_0x3047c4 => {
                _0x4877ae(_0x3047c4);
            });
        });
    });
    if (_0x1cbe8d === _0x55d1e3(0x1c1)) return new Promise((_0x585b0b, _0x1b9a36) => {
        const _0x15fb6e = _0x55d1e3;
        deepl(_0x213c33, _0x3e58e9, _0x12cc67)[_0x15fb6e(0x1cb)](_0x267b0 => {
            const _0xaeb7a0 = _0x15fb6e;
            _0x267b0[_0xaeb7a0(0x213)] === _0xaeb7a0(0x204) && callDeductApi(_0x40ed72['replace'](_0xaeb7a0(0x23e), _0xaeb7a0(0x28a)), _0x213c33, _0x3e58e9, _0x12cc67)['then'](), _0x585b0b(_0x267b0);
        })['catch'](_0x1fcb0d => {
            const _0x328345 = _0x15fb6e;
            sendServerApi(_0x40ed72, _0x213c33, _0x3e58e9, _0x12cc67)[_0x328345(0x1cb)](_0xc5f02e => {
                _0x585b0b(_0xc5f02e);
            })[_0x328345(0x240)](_0x4c8ad8 => {
                _0x1b9a36(_0x4c8ad8);
            });
        });
    });
    if (_0x1cbe8d === 'tencent') return new Promise((_0x463e94, _0x217a7b) => {
        const _0x19b942 = _0x55d1e3;
        tencent(_0x213c33, _0x3e58e9, _0x12cc67)[_0x19b942(0x1cb)](_0x18a990 => {
            const _0x31b413 = _0x19b942;
            _0x18a990[_0x31b413(0x213)] === _0x31b413(0x204) && callDeductApi(_0x40ed72['replace'](_0x31b413(0x234), 'tencent/deduct'), _0x213c33, _0x3e58e9, _0x12cc67)[_0x31b413(0x1cb)](), _0x463e94(_0x18a990);
        })[_0x19b942(0x240)](_0x269206 => {
            const _0x5860ab = _0x19b942;
            sendServerApi(_0x40ed72, _0x213c33, _0x3e58e9, _0x12cc67)[_0x5860ab(0x1cb)](_0x85bd1c => {
                _0x463e94(_0x85bd1c);
            })[_0x5860ab(0x240)](_0x15bc40 => {
                _0x217a7b(_0x15bc40);
            });
        });
    });
}
async function processServiceQueue(_0x273c28, _0x35c13a, _0x374843, _0xb3bb18, _0x487c06) {
    const _0x4029d7 = a0_0x1f81d8,
        _0x2b8c69 = sessionStorage[_0x4029d7(0x274)](accountKey);
    if (_0x2b8c69) try {
        const _0x134ac9 = JSON[_0x4029d7(0x292)](_0x2b8c69);
        if (_0x134ac9[_0x4029d7(0x206)] && _0x134ac9[_0x4029d7(0x206)] > 0x3e8 && _0x134ac9[_0x4029d7(0x20c)]) {
            if (_0x35c13a[_0x4029d7(0x287)](_0x4029d7(0x291))) return processLocalQueue(_0x273c28, _0xb3bb18[_0x4029d7(0x280)], _0xb3bb18[_0x4029d7(0x254)], _0xb3bb18['to'], _0xb3bb18[_0x4029d7(0x1f2)], _0x487c06, _0x4029d7(0x1d8), !![], _0x35c13a);
            if (_0x35c13a[_0x4029d7(0x287)](_0x4029d7(0x270))) return processLocalQueue(_0x273c28, _0xb3bb18['text'], _0xb3bb18[_0x4029d7(0x254)], _0xb3bb18['to'], _0xb3bb18[_0x4029d7(0x1f2)], _0x487c06, _0x4029d7(0x271), !![], _0x35c13a);
            if (_0x35c13a[_0x4029d7(0x287)](_0x4029d7(0x23e))) return processLocalQueue(_0x273c28, _0xb3bb18[_0x4029d7(0x280)], _0xb3bb18[_0x4029d7(0x254)], _0xb3bb18['to'], _0xb3bb18[_0x4029d7(0x1f2)], _0x487c06, _0x4029d7(0x1c1), !![], _0x35c13a);
            if (_0x35c13a[_0x4029d7(0x287)](_0x4029d7(0x234))) return processLocalQueue(_0x273c28, _0xb3bb18[_0x4029d7(0x280)], _0xb3bb18[_0x4029d7(0x254)], _0xb3bb18['to'], _0xb3bb18[_0x4029d7(0x1f2)], _0x487c06, _0x4029d7(0x268), !![], _0x35c13a);
        }
    } catch (_0x119f37) {
        console['log'](_0x119f37);
    }
    await translateQueue[_0x4029d7(0x205)](async () => {
        const _0xc105b6 = _0x4029d7;
        sendServerApi(_0x35c13a, _0xb3bb18[_0xc105b6(0x280)], _0xb3bb18['from'], _0xb3bb18['to'])[_0xc105b6(0x1cb)](_0xeaac62 => {
            const _0x3d5a77 = _0xc105b6;
            if (_0xeaac62['code'] === _0x3d5a77(0x204)) {
                const _0x22fb61 = _0xb3bb18[_0x3d5a77(0x254)] + '-' + _0xb3bb18['to'] + ':' + _0xb3bb18[_0x3d5a77(0x280)];
                ipcRenderer[_0x3d5a77(0x233)](_0x3d5a77(0x1b6), _0x22fb61, _0xeaac62['text']);
                const _0x2a16c0 = _0xb3bb18['to'] + '-' + _0xb3bb18['from'] + ':' + _0xeaac62[_0x3d5a77(0x280)];
                ipcRenderer[_0x3d5a77(0x233)](_0x3d5a77(0x1b6), _0x2a16c0, _0xb3bb18[_0x3d5a77(0x280)]), success(_0x273c28, _0xb3bb18[_0x3d5a77(0x1f2)], _0xeaac62[_0x3d5a77(0x280)], _0x487c06);
            } else error(_0xb3bb18[_0x3d5a77(0x280)], _0x273c28, _0xb3bb18['sendTag'], _0xeaac62[_0x3d5a77(0x1b7)], _0x487c06, _0xb3bb18[_0x3d5a77(0x254)], _0xb3bb18['to'], _0x35c13a, historyTranslate, null);
        })[_0xc105b6(0x240)](_0x52530d => {
            const _0x5fc238 = _0xc105b6;
            error(_0xb3bb18[_0x5fc238(0x280)], _0x273c28, _0xb3bb18[_0x5fc238(0x1f2)], null, _0x487c06, _0xb3bb18['from'], _0xb3bb18['to'], _0x35c13a, historyTranslate, null);
        });
    });
}
async function processLocalQueue(_0x9743a2, _0x5cf641, _0x3954e7, _0x3cf530, _0x4e7a79, _0x4d205a, _0x2c1052, _0x33aacf, _0x59ffdf) {
    const _0x2fd686 = a0_0x1f81d8;
    _0x2c1052 === _0x2fd686(0x1d8) && await translateQueue['addTask'](async () => {
        const _0x5f0ae8 = _0x2fd686;
        let _0xa10b48;
        _0x3cf530 === 'zh' ? _0xa10b48 = '' : _0xa10b48 = _0x3cf530, youdao(_0x5cf641, _0x3954e7, _0xa10b48)[_0x5f0ae8(0x1cb)](_0x58bb33 => {
            const _0xb93aee = _0x5f0ae8;
            if (_0x58bb33[_0xb93aee(0x213)] === _0xb93aee(0x204)) {
                const _0xc14ab0 = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                ipcRenderer[_0xb93aee(0x233)](_0xb93aee(0x1b6), _0xc14ab0, _0x58bb33[_0xb93aee(0x280)]), success(_0x9743a2, _0x4e7a79, _0x58bb33[_0xb93aee(0x280)], _0x4d205a), callDeductApi(_0x59ffdf[_0xb93aee(0x246)](_0xb93aee(0x291), _0xb93aee(0x289)), _0x5cf641, _0x3954e7, _0x3cf530);
            } else sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)['then'](_0x4fe1b3 => {
                const _0x2472e2 = _0xb93aee;
                if (_0x4fe1b3[_0x2472e2(0x213)] === _0x2472e2(0x204)) {
                    const _0x3bca9a = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer[_0x2472e2(0x233)](_0x2472e2(0x1b6), _0x3bca9a, _0x4fe1b3[_0x2472e2(0x280)]), success(_0x9743a2, _0x4e7a79, _0x4fe1b3[_0x2472e2(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x4fe1b3[_0x2472e2(0x1b7)], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })['catch'](_0x3a1801 => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        })[_0x5f0ae8(0x240)](_0x17cbfd => {
            const _0x3de075 = _0x5f0ae8;
            sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)[_0x3de075(0x1cb)](_0x397848 => {
                const _0x598189 = _0x3de075;
                if (_0x397848[_0x598189(0x213)] === _0x598189(0x204)) {
                    const _0x422178 = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer[_0x598189(0x233)](_0x598189(0x1b6), _0x422178, _0x397848['text']), success(_0x9743a2, _0x4e7a79, _0x397848[_0x598189(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x397848[_0x598189(0x1b7)], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })[_0x3de075(0x240)](_0x4b178b => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        });
    }), _0x2c1052 === _0x2fd686(0x271) && await translateQueue[_0x2fd686(0x205)](async () => {
        const _0x18e4ef = _0x2fd686;
        google(_0x5cf641, _0x3954e7, _0x3cf530)[_0x18e4ef(0x1cb)](_0x110a4d => {
            const _0x1fe683 = _0x18e4ef;
            if (_0x110a4d[_0x1fe683(0x213)] === _0x1fe683(0x204)) {
                const _0x4fbe7b = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                ipcRenderer[_0x1fe683(0x233)](_0x1fe683(0x1b6), _0x4fbe7b, _0x110a4d[_0x1fe683(0x280)]), success(_0x9743a2, _0x4e7a79, _0x110a4d[_0x1fe683(0x280)], _0x4d205a), callDeductApi(_0x59ffdf[_0x1fe683(0x246)](_0x1fe683(0x270), _0x1fe683(0x26e)), _0x5cf641, _0x3954e7, _0x3cf530);
            } else sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)[_0x1fe683(0x1cb)](_0x316c03 => {
                const _0x376503 = _0x1fe683;
                if (_0x316c03[_0x376503(0x213)] === _0x376503(0x204)) {
                    const _0x12c95b = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer['send']('chat-history-channel-save', _0x12c95b, _0x316c03[_0x376503(0x280)]), success(_0x9743a2, _0x4e7a79, _0x316c03[_0x376503(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x316c03['msg'], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })[_0x1fe683(0x240)](_0x12b9df => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        })[_0x18e4ef(0x240)](_0x2c863b => {
            const _0x1744f5 = _0x18e4ef;
            sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)['then'](_0x3f1972 => {
                const _0x465fec = a0_0x4d4f;
                if (_0x3f1972['code'] === _0x465fec(0x204)) {
                    const _0x15f502 = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer[_0x465fec(0x233)](_0x465fec(0x1b6), _0x15f502, _0x3f1972[_0x465fec(0x280)]), success(_0x9743a2, _0x4e7a79, _0x3f1972[_0x465fec(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x3f1972[_0x465fec(0x1b7)], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })[_0x1744f5(0x240)](_0x543c64 => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        });
    }), _0x2c1052 === _0x2fd686(0x1c1) && await translateQueue['addTask'](async () => {
        const _0x297501 = _0x2fd686;
        deepl(_0x5cf641, _0x3954e7, _0x3cf530)['then'](_0x343bb9 => {
            const _0x283f59 = a0_0x4d4f;
            if (_0x343bb9[_0x283f59(0x213)] === _0x283f59(0x204)) {
                const _0x31b2d1 = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                ipcRenderer[_0x283f59(0x233)](_0x283f59(0x1b6), _0x31b2d1, _0x343bb9['text']), success(_0x9743a2, _0x4e7a79, _0x343bb9['text'], _0x4d205a), callDeductApi(_0x59ffdf[_0x283f59(0x246)](_0x283f59(0x23e), _0x283f59(0x28a)), _0x5cf641, _0x3954e7, _0x3cf530);
            } else sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)[_0x283f59(0x1cb)](_0x10ab2c => {
                const _0x2a496d = _0x283f59;
                if (_0x10ab2c[_0x2a496d(0x213)] === _0x2a496d(0x204)) {
                    const _0x2267c2 = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer[_0x2a496d(0x233)](_0x2a496d(0x1b6), _0x2267c2, _0x10ab2c['text']), success(_0x9743a2, _0x4e7a79, _0x10ab2c[_0x2a496d(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x10ab2c[_0x2a496d(0x1b7)], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })[_0x283f59(0x240)](_0x1dfc2b => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        })[_0x297501(0x240)](_0x190315 => {
            const _0x268efe = _0x297501;
            sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)[_0x268efe(0x1cb)](_0x571741 => {
                const _0x107fd1 = _0x268efe;
                if (_0x571741[_0x107fd1(0x213)] === _0x107fd1(0x204)) {
                    const _0x4f0261 = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer[_0x107fd1(0x233)]('chat-history-channel-save', _0x4f0261, _0x571741['text']), success(_0x9743a2, _0x4e7a79, _0x571741[_0x107fd1(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x571741[_0x107fd1(0x1b7)], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })['catch'](_0x395c39 => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        });
    }), _0x2c1052 === _0x2fd686(0x268) && await translateQueue[_0x2fd686(0x205)](async () => {
        const _0x24fa90 = _0x2fd686;
        tencent(_0x5cf641, _0x3954e7, _0x3cf530)[_0x24fa90(0x1cb)](_0x3a1230 => {
            const _0x1e7a82 = _0x24fa90;
            if (_0x3a1230['code'] === _0x1e7a82(0x204)) {
                const _0x196ccd = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                ipcRenderer['send']('chat-history-channel-save', _0x196ccd, _0x3a1230[_0x1e7a82(0x280)]), success(_0x9743a2, _0x4e7a79, _0x3a1230[_0x1e7a82(0x280)], _0x4d205a), callDeductApi(_0x59ffdf[_0x1e7a82(0x246)]('tencent/text', 'tencent/deduct'), _0x5cf641, _0x3954e7, _0x3cf530);
            } else sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)[_0x1e7a82(0x1cb)](_0x3b19dc => {
                const _0x5bf18e = _0x1e7a82;
                if (_0x3b19dc[_0x5bf18e(0x213)] === 'SUCCESS') {
                    const _0x3b7736 = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer[_0x5bf18e(0x233)]('chat-history-channel-save', _0x3b7736, _0x3b19dc[_0x5bf18e(0x280)]), success(_0x9743a2, _0x4e7a79, _0x3b19dc[_0x5bf18e(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x3b19dc[_0x5bf18e(0x1b7)], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })[_0x1e7a82(0x240)](_0x59615b => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        })[_0x24fa90(0x240)](_0x2d2a73 => {
            const _0x233a9c = _0x24fa90;
            sendServerApi(_0x59ffdf, _0x5cf641, _0x3954e7, _0x3cf530)[_0x233a9c(0x1cb)](_0x3b286a => {
                const _0x3e935b = _0x233a9c;
                if (_0x3b286a['code'] === _0x3e935b(0x204)) {
                    const _0x1893aa = _0x3954e7 + '-' + _0x3cf530 + ':' + _0x5cf641;
                    ipcRenderer[_0x3e935b(0x233)]('chat-history-channel-save', _0x1893aa, _0x3b286a[_0x3e935b(0x280)]), success(_0x9743a2, _0x4e7a79, _0x3b286a[_0x3e935b(0x280)], _0x4d205a);
                } else error(_0x5cf641, _0x9743a2, _0x4e7a79, _0x3b286a[_0x3e935b(0x1b7)], _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            })['catch'](_0x5244b9 => {
                error(_0x5cf641, _0x9743a2, _0x4e7a79, null, _0x4d205a, _0x3954e7, _0x3cf530, _0x59ffdf, historyTranslate, _0x2c1052);
            });
        });
    });
}
async function callDeductApi(_0x22b203, _0x464c26, _0x59942c, _0x390b98) {
    const _0x34eed4 = a0_0x1f81d8,
        _0x34f9c5 = JSON[_0x34eed4(0x257)]({
            'text': _0x464c26,
            'from': _0x59942c,
            'to': _0x390b98
        }),
        _0x177df7 = new XMLHttpRequest();
    _0x177df7[_0x34eed4(0x1c9)](_0x34eed4(0x25a), _0x22b203, !![]), await getHttp(_0x177df7, getSUrl(_0x22b203)), _0x177df7[_0x34eed4(0x22e)] = function () {
        const _0x1b6fab = _0x34eed4;
        if (_0x177df7[_0x1b6fab(0x222)] === 0x4) {
            if (_0x177df7[_0x1b6fab(0x23b)] === 0xc8) {
                const _0x5038c5 = JSON['parse'](_0x177df7[_0x1b6fab(0x24a)]);
                let _0x566387 = _0x5038c5['code'];
                if (_0x566387 === _0x1b6fab(0x204) && _0x5038c5[_0x1b6fab(0x20b)]) {
                    const _0x57c02e = JSON[_0x1b6fab(0x292)](JSON['stringify'](_0x5038c5[_0x1b6fab(0x20b)]));
                    _0x5038c5 && _0x5038c5[_0x1b6fab(0x20b)][_0x1b6fab(0x20b)] && sessionStorage[_0x1b6fab(0x282)](accountKey, JSON[_0x1b6fab(0x257)](_0x57c02e));
                }
            }
        }
    }, _0x177df7[_0x34eed4(0x1fd)] = function () {
        const _0x5d7a04 = _0x34eed4;
        console[_0x5d7a04(0x239)](error);
    }, _0x177df7[_0x34eed4(0x233)](_0x34f9c5);
}
async function fetchUserLangConfig(_0x5026f2, _0x5cd8ec) {
    const _0x1226bb = a0_0x1f81d8;
    if (!_0x5cd8ec) {
        setUserLangConfig();
        return;
    }
    try {
        const _0x3cd855 = apiUrl + _0x1226bb(0x264),
            _0x2186cd = JSON[_0x1226bb(0x257)]({
                'appType': _0x5026f2,
                'userAppId': _0x5cd8ec
            }),
            _0x509291 = new XMLHttpRequest();
        _0x509291[_0x1226bb(0x1c9)](_0x1226bb(0x25a), _0x3cd855, !![]), await getHttp(_0x509291, '/translate/lang/config/info'), _0x509291[_0x1226bb(0x22e)] = function () {
            const _0x181fa1 = _0x1226bb;
            if (_0x509291['readyState'] === 0x4) {
                if (_0x509291[_0x181fa1(0x23b)] === 0xc8) {
                    const _0x1f34f1 = JSON[_0x181fa1(0x292)](_0x509291[_0x181fa1(0x24a)]);
                    let _0x1eec47 = _0x1f34f1['code'];
                    if (_0x1eec47 === 'SUCCESS' && _0x1f34f1[_0x181fa1(0x20b)]) {
                        const _0x49eb9a = JSON[_0x181fa1(0x292)](JSON[_0x181fa1(0x257)](_0x1f34f1[_0x181fa1(0x20b)]));
                        _0x1f34f1 && _0x1f34f1['data']['data'] && sessionStorage[_0x181fa1(0x282)](languageKey, JSON['stringify'](_0x49eb9a));
                    } else setUserLangConfig();
                } else setUserLangConfig(), console[_0x181fa1(0x239)](error);
            }
        }, _0x509291['onerror'] = function () {
            setUserLangConfig(), console['log'](error);
        }, _0x509291[_0x1226bb(0x233)](_0x2186cd);
    } catch (_0x212ed7) {
        setUserLangConfig(), console['log'](_0x212ed7);
    }
}
async function fetchCustomerInfo(_0x40562a, _0x10c604, _0x27e04c) {
    const _0x26ba55 = a0_0x1f81d8;
    if (!_0x40562a || !_0x10c604 || !_0x27e04c) return;
    try {
        const _0x19c83f = sessionStorage[_0x26ba55(0x274)]('AppType'),
            _0x3476e1 = apiUrl + _0x26ba55(0x1f0),
            _0x46d7be = JSON['stringify']({
                'appType': _0x19c83f,
                'userAppId': _0x40562a,
                'customerAppId': _0x10c604
            }),
            _0x25e99f = new XMLHttpRequest();
        _0x25e99f[_0x26ba55(0x1c9)](_0x26ba55(0x25a), _0x3476e1, !![]), await getHttp(_0x25e99f, getSUrl(_0x26ba55(0x1f0))), _0x25e99f[_0x26ba55(0x22e)] = function () {
            const _0x498f6a = _0x26ba55;
            if (_0x25e99f['readyState'] === 0x4) {
                if (_0x25e99f[_0x498f6a(0x23b)] === 0xc8) {
                    const _0xe69905 = JSON[_0x498f6a(0x292)](_0x25e99f[_0x498f6a(0x24a)]);
                    let _0x2feb9f = _0xe69905[_0x498f6a(0x213)];
                    if (_0x2feb9f === _0x498f6a(0x204) && _0xe69905['data']) {
                        const _0x3fa657 = JSON[_0x498f6a(0x292)](JSON[_0x498f6a(0x257)](_0xe69905[_0x498f6a(0x20b)]));
                        _0x3fa657 && _0x3fa657[_0x498f6a(0x1e1)] && u(_0x27e04c)[_0x498f6a(0x280)](_0x3fa657['name']);
                    }
                } else console[_0x498f6a(0x239)](error);
            }
        }, _0x25e99f[_0x26ba55(0x1fd)] = function () {
            const _0x41ee02 = _0x26ba55;
            console[_0x41ee02(0x239)](error);
        }, _0x25e99f[_0x26ba55(0x233)](_0x46d7be);
    } catch (_0x154390) {
        console['log'](_0x154390);
    }
}
async function handelAudioRecognize(_0x3c499b, _0x46d13a, _0x4ec866, _0x515a64) {
    return new Promise(async (_0x588cc2, _0x50c15c) => {
        const _0xb697b6 = a0_0x4d4f,
            _0x4c698f = JSON[_0xb697b6(0x257)]({
                'appType': _0x3c499b,
                'from': _0x46d13a,
                'audioTime': _0x4ec866,
                'data': _0x515a64
            }),
            _0x31ce51 = new XMLHttpRequest();
        _0x31ce51[_0xb697b6(0x1c9)](_0xb697b6(0x25a), apiUrl + _0xb697b6(0x24b), !![]), await getHttp(_0x31ce51, getSUrl('/translate/audio/to/text')), _0x31ce51[_0xb697b6(0x22e)] = function () {
            const _0x160ce8 = _0xb697b6;
            if (_0x31ce51[_0x160ce8(0x222)] === 0x4) {
                if (_0x31ce51['status'] === 0xc8) {
                    const _0x593f31 = JSON[_0x160ce8(0x292)](_0x31ce51[_0x160ce8(0x24a)]);
                    let _0x460e7c, _0x44e633 = _0x593f31[_0x160ce8(0x213)];
                    if (_0x44e633 === _0x160ce8(0x204)) {
                        const _0x4fe265 = JSON['parse'](JSON[_0x160ce8(0x257)](_0x593f31['data']));
                        _0x460e7c = _0x4fe265['text'];
                        if (_0x4fe265['account']) {
                            const _0x52aab2 = _0x4fe265[_0x160ce8(0x215)];
                            sessionStorage[_0x160ce8(0x282)](accountKey, JSON[_0x160ce8(0x257)](_0x52aab2));
                        }
                    } else _0x460e7c = _0x593f31[_0x160ce8(0x1b7)];
                    const _0x1734ca = {
                        'code': _0x44e633,
                        'text': _0x460e7c
                    };
                    _0x588cc2(_0x1734ca);
                } else _0x50c15c(_0x31ce51['status']);
            }
        }, _0x31ce51[_0xb697b6(0x1fd)] = function () {
            const _0x586c1c = _0xb697b6;
            _0x50c15c(_0x586c1c(0x1d7));
        }, _0x31ce51[_0xb697b6(0x233)](_0x4c698f);
    });
}

function addAfresh(_0x10d7e6, _0x21ddc8, _0x205a21, _0x21a8ea, _0x347e9a, _0x509948) {
    const _0x4980c3 = a0_0x1f81d8;
    if (!_0x205a21) {
        if (u(_0x21ddc8)[_0x4980c3(0x1db)]()['find'](_0x4980c3(0x1be))['length'] <= 0x0) {
            const _0x54e0c5 = document[_0x4980c3(0x243)](_0x4980c3(0x1ea));
            _0x54e0c5['style'] = 'cursor:\x20pointer;padding-left:\x2010px;', _0x54e0c5[_0x4980c3(0x23d)] = _0x4980c3(0x261), _0x54e0c5[_0x4980c3(0x24c)] = _0x4980c3(0x1e3);
            const _0x273b78 = u(_0x21ddc8)['parent']()[_0x4980c3(0x200)](_0x4980c3(0x1bf))[_0x4980c3(0x217)]();
            _0x273b78 && _0x273b78[_0x4980c3(0x28b)](_0x54e0c5), _0x54e0c5[_0x4980c3(0x22a)] = function () {
                const _0x5971b9 = _0x4980c3,
                    _0x321b09 = languageGet(_0x509948);
                _0x321b09 && (_0x273b78[_0x5971b9(0x23d)] = _0x5971b9(0x1ba), historyTranslateAgain(_0x10d7e6, _0x21ddc8, _0x321b09['receiveIn'], _0x321b09[_0x5971b9(0x1ed)], _0x321b09[_0x5971b9(0x294)], _0x205a21, _0x347e9a, _0x321b09[_0x5971b9(0x1d1)]));
            };
        }
    }
}
async function getHttp(_0x4281b8, _0x2c3eba) {
    const _0x59917e = a0_0x1f81d8;
    _0x4281b8[_0x59917e(0x1de)] = 0xea60;
    const _0x442cd9 = sessionStorage[_0x59917e(0x274)](tokenKey);
    _0x4281b8[_0x59917e(0x1e4)]('Authorization', _0x442cd9), _0x4281b8[_0x59917e(0x1e4)](_0x59917e(0x25d), 'M001'), _0x4281b8[_0x59917e(0x1e4)](_0x59917e(0x250), _0x59917e(0x293));
    const _0x35303c = new Date()[_0x59917e(0x1f5)]();
    _0x4281b8[_0x59917e(0x1e4)]('t', _0x35303c);
    const _0x5e39b4 = await generateSignature(_0x442cd9, _0x2c3eba, _0x35303c);
    return _0x4281b8[_0x59917e(0x1e4)]('s', _0x5e39b4), _0x4281b8;
}
async function generateSignature(_0x401f5e, _0x120939, _0x1034fd) {
    const _0x49265a = a0_0x1f81d8,
        _0x916008 = {};
    _0x916008[_0x49265a(0x1c5)] = _0x1034fd;
    _0x401f5e && (_0x916008[_0x49265a(0x263)] = _0x401f5e);
    const _0x5bdf4a = Object[_0x49265a(0x24f)](_0x916008)[_0x49265a(0x1d0)]()[_0x49265a(0x1c6)]((_0x1ad11a, _0x2ef327) => {
        return _0x1ad11a[_0x2ef327] = _0x916008[_0x2ef327], _0x1ad11a;
    }, {});
    let _0x51db98 = '';
    for (const [_0x120653, _0x18b4b0] of Object['entries'](_0x5bdf4a)) {
        _0x51db98 += _0x120653 + '=' + _0x18b4b0 + '&';
    }
    _0x51db98 += _0x120939;
    const _0x1aea38 = new TextEncoder(),
        _0x24d5c7 = await crypto[_0x49265a(0x1f3)][_0x49265a(0x1d3)](_0x49265a(0x20a), _0x1aea38[_0x49265a(0x26f)](_0x120939), {
            'name': 'HMAC',
            'hash': _0x49265a(0x1cd)
        }, ![], [_0x49265a(0x277)]),
        _0x199c97 = await crypto[_0x49265a(0x1f3)][_0x49265a(0x277)]('HMAC', _0x24d5c7, _0x1aea38[_0x49265a(0x26f)](_0x51db98)),
        _0x1f1a17 = Array[_0x49265a(0x254)](new Uint8Array(_0x199c97));
    return _0x1f1a17[_0x49265a(0x26d)](_0x2f7149 => _0x2f7149['toString'](0x10)['padStart'](0x2, '0'))[_0x49265a(0x25e)]('');
}

function getSUrl(_0x3766c9) {
    const _0x398b86 = a0_0x1f81d8;
    return _0x3766c9[_0x398b86(0x246)](apiUrl, '')[_0x398b86(0x246)]('/api', '');
}
const TranslateCommon = {
    'initQueue': initQueue,
    'isChinese': isChinese,
    'includeChinese': includeChinese,
    'isNumber': isNumber,
    'success': success,
    'error': error,
    'getPlaceholderText': getPlaceholderText,
    'getPlaceholderTextNoHtml': getPlaceholderTextNoHtml,
    'getErrorPlaceholderText': getErrorPlaceholderText,
    'replaceInput': replaceInput,
    'replaceInputTelegram': replaceInputTelegram,
    'pasteText': pasteText,
    'pasteTextTwitter': pasteTextTwitter,
    'selectText': selectText,
    'selectAll': selectAll,
    'selectTextTelegram': selectTextTelegram,
    'languageGet': languageGet,
    'setTranslateLoading': setTranslateLoading,
    'setTranslateMessage': setTranslateMessage,
    'messageIn': messageIn,
    'messageOut': messageOut,
    'initPlugs': initPlugs,
    'initUserPanel': initUserPanel,
    'fetchChatUserConfig': fetchChatUserConfig,
    'handleTranslate': handleTranslate,
    'getUserPackage': getUserPackage,
    'userLanguageSave': userLanguageSave,
    'userLanguageRemove': userLanguageRemove,
    'userLanguageGet': userLanguageGet,
    'changeFontAndColor': changeFontAndColor,
    'changeAISuggest': changeAISuggest,
    'generateSuggest': generateSuggest,
    'fetchUserLangConfig': fetchUserLangConfig,
    'fetchCustomerInfo': fetchCustomerInfo,
    'triggerInputEvent': triggerInputEvent,
    'handelAudioRecognize': handelAudioRecognize,
    'getChatAudioHistoryStorage': getChatAudioHistoryStorage,
    'getChatHistoryStorage': getChatHistoryStorage
};
module[a0_0x1f81d8(0x266)] = TranslateCommon;