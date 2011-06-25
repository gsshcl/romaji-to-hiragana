

// create hiragana table.

var hiragana = new Array();

	//// 4-letter romaji
	hiragana['xtsu'] = 'っ';
	
	//// 3-letter romaji
	hiragana['kya'] = 'きゃ';	hiragana['kyi'] = 'きぃ';	hiragana['kyu'] = 'きゅ';	hiragana['kye'] = 'きぇ';	hiragana['kyo'] = 'きょ';
	hiragana['sya'] = 'しゃ';	hiragana['syi'] = 'し';		hiragana['syu'] = 'しゅ';	hiragana['sye'] = 'しぇ';	hiragana['syo'] = 'しょ';
	hiragana['sha'] = 'しゃ';	hiragana['shi'] = 'し';		hiragana['shu'] = 'しゅ';	hiragana['she'] = 'しぇ';	hiragana['sho'] = 'しょ';
	hiragana['tya'] = 'ちゃ';	hiragana['tyi'] = 'ちぃ';	hiragana['tyu'] = 'ちゅ';	hiragana['tye'] = 'ちぇ';	hiragana['tyo'] = 'ちょ';
	hiragana['cya'] = 'ちゃ';	hiragana['cyi'] = 'ちぃ';	hiragana['cyu'] = 'ちゅ';	hiragana['cye'] = 'ちぇ';	hiragana['cyo'] = 'ちょ';
	hiragana['cha'] = 'ちゃ';	hiragana['chi'] = 'ち';		hiragana['chu'] = 'ちゅ';	hiragana['che'] = 'ちぇ';	hiragana['cho'] = 'ちょ';
	hiragana['nya'] = 'にゃ';	hiragana['nyi'] = 'にぃ';	hiragana['nyu'] = 'にゅ';	hiragana['nye'] = 'にぇ';	hiragana['nyo'] = 'にょ';
	hiragana['hya'] = 'ひゃ';	hiragana['hyi'] = 'ひぃ';	hiragana['hyu'] = 'ひゅ';	hiragana['hye'] = 'ひぇ';	hiragana['hyo'] = 'ひょ';
	hiragana['mya'] = 'みゃ';	hiragana['myi'] = 'みぃ';	hiragana['myu'] = 'みゅ';	hiragana['mye'] = 'みぇ';	hiragana['myo'] = 'みょ';
	hiragana['rya'] = 'りゃ';	hiragana['ryi'] = 'りぃ';	hiragana['ryu'] = 'りゅ';	hiragana['rye'] = 'りぇ';	hiragana['ryo'] = 'りょ';
	
	hiragana['gya'] = 'ぎゃ';	hiragana['gyi'] = 'ぎぃ';	hiragana['gyu'] = 'ぎゅ';	hiragana['gye'] = 'ぎぇ';	hiragana['gyo'] = 'ぎょ';
	hiragana['zya'] = 'じゃ';	hiragana['zyi'] = 'じぃ';	hiragana['zyu'] = 'じゅ';	hiragana['zye'] = 'じぇ';	hiragana['zyo'] = 'じょ';
	hiragana['jya'] = 'じゃ';	hiragana['jyi'] = 'じぃ';	hiragana['jyu'] = 'じゅ';	hiragana['jye'] = 'じぇ';	hiragana['jyo'] = 'じょ';
	hiragana['dya'] = 'ぢゃ';	hiragana['dyi'] = 'ぢぃ';	hiragana['dyu'] = 'ぢゅ';	hiragana['dye'] = 'ぢぇ';	hiragana['dyo'] = 'ぢょ';
	hiragana['bya'] = 'びゃ';	hiragana['byi'] = 'びぃ';	hiragana['byu'] = 'びゅ';	hiragana['bye'] = 'びぇ';	hiragana['byo'] = 'びょ';
	hiragana['pya'] = 'ぴゃ';	hiragana['pyi'] = 'ぴぃ';	hiragana['pyu'] = 'ぴゅ';	hiragana['pye'] = 'ぴぇ';	hiragana['pyo'] = 'ぴょ';
	
	hiragana['xya'] = 'ゃ';		hiragana['xyi'] = 'ぃ';		hiragana['xyu'] = 'ゅ';		hiragana['xye'] = 'ぇ';		hiragana['xyo'] = 'ょ';
	hiragana['lya'] = 'ゃ';		hiragana['lyi'] = 'ぃ';		hiragana['lyu'] = 'ゅ';		hiragana['lye'] = 'ぇ';		hiragana['lyo'] = 'ょ';
	
	hiragana['qya'] = 'くゃ';	hiragana['qyi'] = 'くぃ';	hiragana['qyu'] = 'くゅ';	hiragana['qye'] = 'くぇ';	hiragana['qyo'] = 'くょ';
	hiragana['fya'] = 'ふゃ';	hiragana['fyi'] = 'ふぃ';	hiragana['fyu'] = 'ふゅ';	hiragana['fye'] = 'ふぇ';	hiragana['fyo'] = 'ふょ';
	hiragana['tsa'] = 'つぁ';	hiragana['tsi'] = 'つぃ';	hiragana['tsu'] = 'つ';		hiragana['tse'] = 'つぇ';	hiragana['tso'] = 'つぉ';
	
	////2-letter romaji
	hiragana['nn'] = 'ん';
	
	hiragana['ka'] = 'か';		hiragana['ki'] = 'き';		hiragana['ku'] = 'く';		hiragana['ke'] = 'け';		hiragana['ko'] = 'こ';
	hiragana['sa'] = 'さ';		hiragana['si'] = 'し';		hiragana['su'] = 'す';		hiragana['se'] = 'せ';		hiragana['so'] = 'そ';
	hiragana['ta'] = 'た';		hiragana['ti'] = 'ち';		hiragana['tu'] = 'つ';		hiragana['te'] = 'て';		hiragana['to'] = 'と';
	hiragana['na'] = 'な';		hiragana['ni'] = 'に';		hiragana['nu'] = 'ぬ';		hiragana['ne'] = 'ね';		hiragana['no'] = 'の';
	hiragana['ha'] = 'は';		hiragana['hi'] = 'ひ';		hiragana['hu'] = 'ふ';		hiragana['he'] = 'へ';		hiragana['ho'] = 'ほ';
	hiragana['ma'] = 'ま';		hiragana['mi'] = 'み';		hiragana['mu'] = 'む';		hiragana['me'] = 'め';		hiragana['mo'] = 'も';
	hiragana['ya'] = 'や';		hiragana['yi'] = 'い';		hiragana['yu'] = 'ゆ';		hiragana['ye'] = 'いぇ';		hiragana['yo'] = 'よ';
	hiragana['ra'] = 'ら';		hiragana['ri'] = 'り';		hiragana['ru'] = 'る';		hiragana['re'] = 'れ';		hiragana['ro'] = 'ろ';
	hiragana['wa'] = 'わ';		hiragana['wi'] = 'うぃ';		hiragana['wu'] = 'う';		hiragana['we'] = 'うぇ';		hiragana['wo'] = 'を';
	
	hiragana['ga'] = 'が';		hiragana['gi'] = 'ぎ';		hiragana['gu'] = 'ぐ';		hiragana['ge'] = 'げ';		hiragana['go'] = 'ご';
	hiragana['za'] = 'ざ';		hiragana['zi'] = 'じ';		hiragana['zu'] = 'ず';		hiragana['ze'] = 'ぜ';		hiragana['zo'] = 'ぞ';
	hiragana['da'] = 'だ';		hiragana['di'] = 'ぢ';		hiragana['du'] = 'づ';		hiragana['de'] = 'で';		hiragana['do'] = 'ど';
	hiragana['ba'] = 'ば';		hiragana['bi'] = 'び';		hiragana['bu'] = 'ぶ';		hiragana['be'] = 'べ';		hiragana['bo'] = 'ぼ';
	hiragana['pa'] = 'ぱ';		hiragana['pi'] = 'ぴ';		hiragana['pu'] = 'ぷ';		hiragana['pe'] = 'ぺ';		hiragana['po'] = 'ぽ';
	
	hiragana['ja'] = 'じゃ';		hiragana['ji'] = 'じ';		hiragana['ju'] = 'じゅ';		hiragana['je'] = 'じぇ';		hiragana['jo'] = 'じょ';
	hiragana['xa'] = 'ぁ';		hiragana['xi'] = 'ぃ';		hiragana['xu'] = 'ぅ';		hiragana['xe'] = 'ぇ';		hiragana['xo'] = 'ぉ';
	hiragana['la'] = 'ぁ';		hiragana['li'] = 'ぃ';		hiragana['lu'] = 'ぅ';		hiragana['le'] = 'ぇ';		hiragana['lo'] = 'ぉ';
	hiragana['qa'] = 'くぁ';		hiragana['qi'] = 'くぃ';		hiragana['qu'] = 'く';		hiragana['qe'] = 'くぇ';		hiragana['qo'] = 'くぉ';
	hiragana['fa'] = 'ふぁ';		hiragana['fi'] = 'ふぃ';		hiragana['fu'] = 'ふ';		hiragana['fe'] = 'ふぇ';		hiragana['fo'] = 'ふぉ';
	hiragana['ca'] = 'か';		hiragana['ci'] = 'し';		hiragana['cu'] = 'く';		hiragana['ce'] = 'せ';		hiragana['co'] = 'こ';
	
	////1-letter romaji
	hiragana['a'] = 'あ';	hiragana['i'] = 'い';	hiragana['u'] = 'う';	hiragana['e'] = 'え';	hiragana['o'] = 'お';
	hiragana['n'] = 'ん';


// start function

function matchChar(n, inputValue){
	// match 4-letter romaji
    var prefixChar = inputValue.substring(n, n + 4);
    if (hiragana[prefixChar]) {
        return {
            charContent: hiragana[prefixChar],
            stepLength: 4
        }
    }
    else {
		// match 3-letter romaji
        prefixChar = inputValue.substring(n, n + 3);
        if (hiragana[prefixChar]) {
            return {
                charContent: hiragana[prefixChar],
                stepLength: 3
            }
        }
        else {
			// match 2-letter romaji
            prefixChar = inputValue.substring(n, n + 2);
            if (hiragana[prefixChar]) {
                return {
                    charContent: hiragana[prefixChar],
                    stepLength: 2
                }
            }
            else {
				// match 1-letter romaji
                prefixChar = inputValue.substring(n, n + 1);
                if (hiragana[prefixChar]) {
                    return {
                        charContent: hiragana[prefixChar],
                        stepLength: 1
                    }
                }
                else {
					// match sokuonn romaji
                    prefixChar = inputValue.substring(n, n + 2);
                    firstLetter = prefixChar.substring(0, 1);
                    secondLetter = prefixChar.substring(1, 2);
                    if (firstLetter == secondLetter) {
                        return {
                            charContent: 'っ',
                            stepLength: 1
                        }
                    }
                    else {
						// do nothing
                        return null;
                    }
                }
            }
        }
    }
}

function printHiragana(){
    var inputValue = $.trim($('#inputValue').val().toLowerCase());
    var outputValue = '';
    var startIndex = 0;
    while (startIndex < inputValue.length) {
        var result = matchChar(startIndex, inputValue);
		//case like if you only type a 'k'
        if (result == null) {
            outputValue += inputValue.substring(startIndex);
            break;
        }
        startIndex += result.stepLength;
        outputValue += result.charContent;
    }
    $('#outputValue').html(outputValue);
}

function showInto(){
	$('#inputValue').focus(function(){
		if('Plese input romaji here.'==$(this).val()){
			$(this).val('');
			$(this).css('color','black');
		}
	})
	$('#inputValue').blur(function(){
		if(''==$(this).val()){
			$(this).val('Plese input romaji here.');
			$(this).css('color','gray');
		}
	})
	$('#inputValue').css('color', 'gray');
}

function main(){
    $('#inputValue').keyup(printHiragana);
	$(showInto);
}


$(main);
