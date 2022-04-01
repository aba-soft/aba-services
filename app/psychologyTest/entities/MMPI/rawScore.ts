function shouldBeWrong(answer: number) {
  if (answer === 0) {
    return 1;
  }
  return 0;
}
function shouldBeCorrect(answer: number) {
  if (answer === 1) {
    return 1;
  }
  return 0;
}

export function LFormula(fields: Record<string, number>) {
  const L =
    shouldBeWrong(fields["16"]) +
    shouldBeWrong(fields["29"]) +
    shouldBeWrong(fields["41"]) +
    shouldBeWrong(fields["51"]) +
    shouldBeWrong(fields["77"]) +
    shouldBeWrong(fields["93"]) +
    shouldBeWrong(fields["102"]) +
    shouldBeWrong(fields["107"]) +
    shouldBeWrong(fields["123"]) +
    shouldBeWrong(fields["139"]) +
    shouldBeWrong(fields["153"]) +
    shouldBeWrong(fields["183"]) +
    shouldBeWrong(fields["203"]) +
    shouldBeWrong(fields["232"]) +
    shouldBeWrong(fields["260"]);
  return L;
}
export function FFormula(fields: Record<string, number>) {
  const F =
    shouldBeCorrect(fields["18"]) +
    shouldBeCorrect(fields["24"]) +
    shouldBeCorrect(fields["30"]) +
    shouldBeCorrect(fields["36"]) +
    shouldBeCorrect(fields["42"]) +
    shouldBeCorrect(fields["48"]) +
    shouldBeCorrect(fields["54"]) +
    shouldBeCorrect(fields["60"]) +
    shouldBeCorrect(fields["66"]) +
    shouldBeCorrect(fields["72"]) +
    shouldBeCorrect(fields["84"]) +
    shouldBeCorrect(fields["96"]) +
    shouldBeCorrect(fields["114"]) +
    shouldBeCorrect(fields["138"]) +
    shouldBeCorrect(fields["144"]) +
    shouldBeCorrect(fields["150"]) +
    shouldBeCorrect(fields["156"]) +
    shouldBeCorrect(fields["162"]) +
    shouldBeCorrect(fields["168"]) +
    shouldBeCorrect(fields["180"]) +
    shouldBeCorrect(fields["198"]) +
    shouldBeCorrect(fields["216"]) +
    shouldBeCorrect(fields["228"]) +
    shouldBeCorrect(fields["234"]) +
    shouldBeCorrect(fields["240"]) +
    shouldBeCorrect(fields["246"]) +
    shouldBeCorrect(fields["252"]) +
    shouldBeCorrect(fields["258"]) +
    shouldBeCorrect(fields["264"]) +
    shouldBeCorrect(fields["270"]) +
    shouldBeCorrect(fields["282"]) +
    shouldBeCorrect(fields["288"]) +
    shouldBeCorrect(fields["294"]) +
    shouldBeCorrect(fields["300"]) +
    shouldBeCorrect(fields["306"]) +
    shouldBeCorrect(fields["312"]) +
    shouldBeCorrect(fields["324"]) +
    shouldBeCorrect(fields["336"]) +
    shouldBeCorrect(fields["349"]) +
    shouldBeCorrect(fields["355"]) +
    shouldBeCorrect(fields["361"]) +
    shouldBeWrong(fields["6"]) +
    shouldBeWrong(fields["12"]) +
    shouldBeWrong(fields["78"]) +
    shouldBeWrong(fields["90"]) +
    shouldBeWrong(fields["102"]) +
    shouldBeWrong(fields["108"]) +
    shouldBeWrong(fields["120"]) +
    shouldBeWrong(fields["126"]) +
    shouldBeWrong(fields["132"]) +
    shouldBeWrong(fields["174"]) +
    shouldBeWrong(fields["186"]) +
    shouldBeWrong(fields["192"]) +
    shouldBeWrong(fields["204"]) +
    shouldBeWrong(fields["210"]) +
    shouldBeWrong(fields["222"]) +
    shouldBeWrong(fields["276"]) +
    shouldBeWrong(fields["318"]) +
    shouldBeWrong(fields["330"]) +
    shouldBeWrong(fields["343"]);
  return F;
}
export function KFormula(fields: Record<string, number>) {
  const K =
    shouldBeCorrect(fields["83"]) +
    shouldBeWrong(fields["29"]) +
    shouldBeWrong(fields["37"]) +
    shouldBeWrong(fields["58"]) +
    shouldBeWrong(fields["76"]) +
    shouldBeWrong(fields["110"]) +
    shouldBeWrong(fields["116"]) +
    shouldBeWrong(fields["122"]) +
    shouldBeWrong(fields["127"]) +
    shouldBeWrong(fields["130"]) +
    shouldBeWrong(fields["136"]) +
    shouldBeWrong(fields["148"]) +
    shouldBeWrong(fields["157"]) +
    shouldBeWrong(fields["158"]) +
    shouldBeWrong(fields["167"]) +
    shouldBeWrong(fields["171"]) +
    shouldBeWrong(fields["196"]) +
    shouldBeWrong(fields["213"]) +
    shouldBeWrong(fields["243"]) +
    shouldBeWrong(fields["267"]) +
    shouldBeWrong(fields["284"]) +
    shouldBeWrong(fields["290"]) +
    shouldBeWrong(fields["330"]) +
    shouldBeWrong(fields["338"]) +
    shouldBeWrong(fields["339"]) +
    shouldBeWrong(fields["341"]) +
    shouldBeWrong(fields["346"]) +
    shouldBeWrong(fields["348"]) +
    shouldBeWrong(fields["356"]) +
    shouldBeWrong(fields["365"]);
  return K;
}
export function HsFormula(fields: Record<string, number>) {
  const Hs =
    shouldBeCorrect(fields["18"]) +
    shouldBeCorrect(fields["28"]) +
    shouldBeCorrect(fields["39"]) +
    shouldBeCorrect(fields["53"]) +
    shouldBeCorrect(fields["59"]) +
    shouldBeCorrect(fields["97"]) +
    shouldBeCorrect(fields["101"]) +
    shouldBeCorrect(fields["111"]) +
    shouldBeCorrect(fields["149"]) +
    shouldBeCorrect(fields["175"]) +
    shouldBeCorrect(fields["247"]) +
    shouldBeWrong(fields["2"]) +
    shouldBeWrong(fields["3"]) +
    shouldBeWrong(fields["8"]) +
    shouldBeWrong(fields["10"]) +
    shouldBeWrong(fields["20"]) +
    shouldBeWrong(fields["45"]) +
    shouldBeWrong(fields["47"]) +
    shouldBeWrong(fields["57"]) +
    shouldBeWrong(fields["91"]) +
    shouldBeWrong(fields["117"]) +
    shouldBeWrong(fields["141"]) +
    shouldBeWrong(fields["143"]) +
    shouldBeWrong(fields["152"]) +
    shouldBeWrong(fields["164"]) +
    shouldBeWrong(fields["173"]) +
    shouldBeWrong(fields["176"]) +
    shouldBeWrong(fields["179"]) +
    shouldBeWrong(fields["208"]) +
    shouldBeWrong(fields["224"]) +
    shouldBeWrong(fields["249"]) +
    shouldBeWrong(fields["255"]);
  return Hs;
}
export function DFormula(fields: Record<string, number>) {
  const D =
    shouldBeCorrect(fields["5"]) +
    shouldBeCorrect(fields["15"]) +
    shouldBeCorrect(fields["18"]) +
    shouldBeCorrect(fields["31"]) +
    shouldBeCorrect(fields["38"]) +
    shouldBeCorrect(fields["39"]) +
    shouldBeCorrect(fields["46"]) +
    shouldBeCorrect(fields["56"]) +
    shouldBeCorrect(fields["73"]) +
    shouldBeCorrect(fields["92"]) +
    shouldBeCorrect(fields["117"]) +
    shouldBeCorrect(fields["127"]) +
    shouldBeCorrect(fields["130"]) +
    shouldBeCorrect(fields["146"]) +
    shouldBeCorrect(fields["147"]) +
    shouldBeCorrect(fields["170"]) +
    shouldBeCorrect(fields["175"]) +
    shouldBeCorrect(fields["181"]) +
    shouldBeCorrect(fields["215"]) +
    shouldBeCorrect(fields["233"]) +
    shouldBeWrong(fields["2"]) +
    shouldBeWrong(fields["9"]) +
    shouldBeWrong(fields["10"]) +
    shouldBeWrong(fields["20"]) +
    shouldBeWrong(fields["29"]) +
    shouldBeWrong(fields["33"]) +
    shouldBeWrong(fields["37"]) +
    shouldBeWrong(fields["43"]) +
    shouldBeWrong(fields["45"]) +
    shouldBeWrong(fields["49"]) +
    shouldBeWrong(fields["55"]) +
    shouldBeWrong(fields["68"]) +
    shouldBeWrong(fields["75"]) +
    shouldBeWrong(fields["76"]) +
    shouldBeWrong(fields["95"]) +
    shouldBeWrong(fields["109"]) +
    shouldBeWrong(fields["118"]) +
    shouldBeWrong(fields["134"]) +
    shouldBeWrong(fields["140"]) +
    shouldBeWrong(fields["141"]) +
    shouldBeWrong(fields["142"]) +
    shouldBeWrong(fields["143"]) +
    shouldBeWrong(fields["148"]) +
    shouldBeWrong(fields["165"]) +
    shouldBeWrong(fields["178"]) +
    shouldBeWrong(fields["188"]) +
    shouldBeWrong(fields["189"]) +
    shouldBeWrong(fields["212"]) +
    shouldBeWrong(fields["221"]) +
    shouldBeWrong(fields["223"]) +
    shouldBeWrong(fields["226"]) +
    shouldBeWrong(fields["238"]) +
    shouldBeWrong(fields["245"]) +
    shouldBeWrong(fields["248"]) +
    shouldBeWrong(fields["260"]) +
    shouldBeWrong(fields["267"]) +
    shouldBeWrong(fields["330"]);
  return D;
}
export function HyFormula(fields: Record<string, number>) {
  const Hy =
    shouldBeCorrect(fields["11"]) +
    shouldBeCorrect(fields["18"]) +
    shouldBeCorrect(fields["31"]) +
    shouldBeCorrect(fields["39"]) +
    shouldBeCorrect(fields["40"]) +
    shouldBeCorrect(fields["44"]) +
    shouldBeCorrect(fields["65"]) +
    shouldBeCorrect(fields["101"]) +
    shouldBeCorrect(fields["166"]) +
    shouldBeCorrect(fields["172"]) +
    shouldBeCorrect(fields["175"]) +
    shouldBeCorrect(fields["218"]) +
    shouldBeCorrect(fields["230"]) +
    shouldBeWrong(fields["2"]) +
    shouldBeWrong(fields["3"]) +
    shouldBeWrong(fields["7"]) +
    shouldBeWrong(fields["8"]) +
    shouldBeWrong(fields["9"]) +
    shouldBeWrong(fields["10"]) +
    shouldBeWrong(fields["14"]) +
    shouldBeWrong(fields["26"]) +
    shouldBeWrong(fields["29"]) +
    shouldBeWrong(fields["45"]) +
    shouldBeWrong(fields["47"]) +
    shouldBeWrong(fields["58"]) +
    shouldBeWrong(fields["76"]) +
    shouldBeWrong(fields["81"]) +
    shouldBeWrong(fields["91"]) +
    shouldBeWrong(fields["95"]) +
    shouldBeWrong(fields["98"]) +
    shouldBeWrong(fields["110"]) +
    shouldBeWrong(fields["115"]) +
    shouldBeWrong(fields["116"]) +
    shouldBeWrong(fields["124"]) +
    shouldBeWrong(fields["125"]) +
    shouldBeWrong(fields["129"]) +
    shouldBeWrong(fields["135"]) +
    shouldBeWrong(fields["141"]) +
    shouldBeWrong(fields["148"]) +
    shouldBeWrong(fields["151"]) +
    shouldBeWrong(fields["152"]) +
    shouldBeWrong(fields["157"]) +
    shouldBeWrong(fields["159"]) +
    shouldBeWrong(fields["161"]) +
    shouldBeWrong(fields["164"]) +
    shouldBeWrong(fields["167"]) +
    shouldBeWrong(fields["173"]) +
    shouldBeWrong(fields["176"]) +
    shouldBeWrong(fields["179"]) +
    shouldBeWrong(fields["185"]) +
    shouldBeWrong(fields["193"]) +
    shouldBeWrong(fields["208"]) +
    shouldBeWrong(fields["213"]) +
    shouldBeWrong(fields["224"]) +
    shouldBeWrong(fields["241"]) +
    shouldBeWrong(fields["243"]) +
    shouldBeWrong(fields["249"]) +
    shouldBeWrong(fields["253"]) +
    shouldBeWrong(fields["263"]) +
    shouldBeWrong(fields["265"]);
  return Hy;
}
export function PdFormula(fields: Record<string, number>) {
  const Pd =
    shouldBeCorrect(fields["17"]) +
    shouldBeCorrect(fields["21"]) +
    shouldBeCorrect(fields["22"]) +
    shouldBeCorrect(fields["31"]) +
    shouldBeCorrect(fields["32"]) +
    shouldBeCorrect(fields["35"]) +
    shouldBeCorrect(fields["42"]) +
    shouldBeCorrect(fields["52"]) +
    shouldBeCorrect(fields["54"]) +
    shouldBeCorrect(fields["56"]) +
    shouldBeCorrect(fields["71"]) +
    shouldBeCorrect(fields["82"]) +
    shouldBeCorrect(fields["89"]) +
    shouldBeCorrect(fields["94"]) +
    shouldBeCorrect(fields["99"]) +
    shouldBeCorrect(fields["105"]) +
    shouldBeCorrect(fields["113"]) +
    shouldBeCorrect(fields["195"]) +
    shouldBeCorrect(fields["202"]) +
    shouldBeCorrect(fields["219"]) +
    shouldBeCorrect(fields["225"]) +
    shouldBeCorrect(fields["259"]) +
    shouldBeCorrect(fields["264"]) +
    shouldBeCorrect(fields["288"]) +
    shouldBeWrong(fields["9"]) +
    shouldBeWrong(fields["12"]) +
    shouldBeWrong(fields["34"]) +
    shouldBeWrong(fields["70"]) +
    shouldBeWrong(fields["79"]) +
    shouldBeWrong(fields["83"]) +
    shouldBeWrong(fields["95"]) +
    shouldBeWrong(fields["122"]) +
    shouldBeWrong(fields["125"]) +
    shouldBeWrong(fields["129"]) +
    shouldBeWrong(fields["143"]) +
    shouldBeWrong(fields["157"]) +
    shouldBeWrong(fields["158"]) +
    shouldBeWrong(fields["160"]) +
    shouldBeWrong(fields["167"]) +
    shouldBeWrong(fields["171"]) +
    shouldBeWrong(fields["185"]) +
    shouldBeWrong(fields["209"]) +
    shouldBeWrong(fields["214"]) +
    shouldBeWrong(fields["217"]) +
    shouldBeWrong(fields["226"]) +
    shouldBeWrong(fields["243"]) +
    shouldBeWrong(fields["261"]) +
    shouldBeWrong(fields["263"]) +
    shouldBeWrong(fields["266"]) +
    shouldBeWrong(fields["267"]);
  return Pd;
}
export function MFMFormula(fields: Record<string, number>) {
  const MFM = ////male
    shouldBeCorrect(fields["4"]) +
    shouldBeCorrect(fields["25"]) +
    shouldBeCorrect(fields["62"]) +
    shouldBeCorrect(fields["64"]) +
    shouldBeCorrect(fields["67"]) +
    shouldBeCorrect(fields["74"]) +
    shouldBeCorrect(fields["80"]) +
    shouldBeCorrect(fields["112"]) +
    shouldBeCorrect(fields["119"]) +
    shouldBeCorrect(fields["122"]) +
    shouldBeCorrect(fields["137"]) +
    shouldBeCorrect(fields["166"]) +
    shouldBeCorrect(fields["177"]) +
    shouldBeCorrect(fields["187"]) +
    shouldBeCorrect(fields["191"]) +
    shouldBeCorrect(fields["196"]) +
    shouldBeCorrect(fields["205"]) +
    shouldBeCorrect(fields["209"]) +
    shouldBeCorrect(fields["219"]) +
    shouldBeCorrect(fields["236"]) +
    shouldBeCorrect(fields["251"]) +
    shouldBeCorrect(fields["256"]) +
    shouldBeCorrect(fields["268"]) +
    shouldBeCorrect(fields["271"]) +
    shouldBeCorrect(fields["128"]) +
    shouldBeWrong(fields["1"]) +
    shouldBeWrong(fields["19"]) +
    shouldBeWrong(fields["26"]) +
    shouldBeWrong(fields["27"]) +
    shouldBeWrong(fields["63"]) +
    shouldBeWrong(fields["68"]) +
    shouldBeWrong(fields["69"]) +
    shouldBeWrong(fields["76"]) +
    shouldBeWrong(fields["86"]) +
    shouldBeWrong(fields["103"]) +
    shouldBeWrong(fields["104"]) +
    shouldBeWrong(fields["107"]) +
    shouldBeWrong(fields["120"]) +
    shouldBeWrong(fields["121"]) +
    shouldBeWrong(fields["132"]) +
    shouldBeWrong(fields["133"]) +
    shouldBeWrong(fields["163"]) +
    shouldBeWrong(fields["184"]) +
    shouldBeWrong(fields["193"]) +
    shouldBeWrong(fields["194"]) +
    shouldBeWrong(fields["197"]) +
    shouldBeWrong(fields["199"]) +
    shouldBeWrong(fields["201"]) +
    shouldBeWrong(fields["207"]) +
    shouldBeWrong(fields["231"]) +
    shouldBeWrong(fields["235"]) +
    shouldBeWrong(fields["237"]) +
    shouldBeWrong(fields["239"]) +
    shouldBeWrong(fields["254"]) +
    shouldBeWrong(fields["257"]) +
    shouldBeWrong(fields["272"]);
  return MFM;
}
export function MFFFormula(fields: Record<string, number>) {
  const MFF = ////female
    shouldBeCorrect(fields["4"]) +
    shouldBeCorrect(fields["25"]) +
    shouldBeCorrect(fields["62"]) +
    shouldBeCorrect(fields["64"]) +
    shouldBeCorrect(fields["67"]) +
    shouldBeCorrect(fields["74"]) +
    shouldBeCorrect(fields["80"]) +
    shouldBeCorrect(fields["112"]) +
    shouldBeCorrect(fields["119"]) +
    shouldBeCorrect(fields["121"]) +
    shouldBeCorrect(fields["122"]) +
    shouldBeCorrect(fields["128"]) +
    shouldBeCorrect(fields["137"]) +
    shouldBeCorrect(fields["177"]) +
    shouldBeCorrect(fields["187"]) +
    shouldBeCorrect(fields["191"]) +
    shouldBeCorrect(fields["196"]) +
    shouldBeCorrect(fields["205"]) +
    shouldBeCorrect(fields["219"]) +
    shouldBeCorrect(fields["236"]) +
    shouldBeCorrect(fields["251"]) +
    shouldBeCorrect(fields["256"]) +
    shouldBeCorrect(fields["271"]) +
    shouldBeWrong(fields["1"]) +
    shouldBeWrong(fields["19"]) +
    shouldBeWrong(fields["26"]) +
    shouldBeWrong(fields["27"]) +
    shouldBeWrong(fields["63"]) +
    shouldBeWrong(fields["68"]) +
    shouldBeWrong(fields["69"]) +
    shouldBeWrong(fields["76"]) +
    shouldBeWrong(fields["86"]) +
    shouldBeWrong(fields["103"]) +
    shouldBeWrong(fields["104"]) +
    shouldBeWrong(fields["107"]) +
    shouldBeWrong(fields["120"]) +
    shouldBeWrong(fields["132"]) +
    shouldBeWrong(fields["133"]) +
    shouldBeWrong(fields["163"]) +
    shouldBeWrong(fields["166"]) +
    shouldBeWrong(fields["184"]) +
    shouldBeWrong(fields["193"]) +
    shouldBeWrong(fields["194"]) +
    shouldBeWrong(fields["197"]) +
    shouldBeWrong(fields["199"]) +
    shouldBeWrong(fields["201"]) +
    shouldBeWrong(fields["207"]) +
    shouldBeWrong(fields["209"]) +
    shouldBeWrong(fields["231"]) +
    shouldBeWrong(fields["235"]) +
    shouldBeWrong(fields["237"]) +
    shouldBeWrong(fields["239"]) +
    shouldBeWrong(fields["254"]) +
    shouldBeWrong(fields["257"]) +
    shouldBeWrong(fields["268"]) +
    shouldBeWrong(fields["272"]);
  return MFF;
}
export function PaFormula(fields: Record<string, number>) {
  const Pa =
    shouldBeCorrect(fields["16"]) +
    shouldBeCorrect(fields["17"]) +
    shouldBeCorrect(fields["22"]) +
    shouldBeCorrect(fields["23"]) +
    shouldBeCorrect(fields["24"]) +
    shouldBeCorrect(fields["42"]) +
    shouldBeCorrect(fields["99"]) +
    shouldBeCorrect(fields["113"]) +
    shouldBeCorrect(fields["138"]) +
    shouldBeCorrect(fields["144"]) +
    shouldBeCorrect(fields["145"]) +
    shouldBeCorrect(fields["146"]) +
    shouldBeCorrect(fields["234"]) +
    shouldBeCorrect(fields["259"]) +
    shouldBeCorrect(fields["271"]) +
    shouldBeCorrect(fields["277"]) +
    shouldBeCorrect(fields["285"]) +
    shouldBeCorrect(fields["305"]) +
    shouldBeCorrect(fields["307"]) +
    shouldBeCorrect(fields["333"]) +
    shouldBeCorrect(fields["334"]) +
    shouldBeCorrect(fields["336"]) +
    shouldBeCorrect(fields["355"]) +
    shouldBeCorrect(fields["361"]) +
    shouldBeWrong(fields["81"]) +
    shouldBeWrong(fields["95"]) +
    shouldBeWrong(fields["98"]) +
    shouldBeWrong(fields["100"]) +
    shouldBeWrong(fields["104"]) +
    shouldBeWrong(fields["110"]) +
    shouldBeWrong(fields["244"]) +
    shouldBeWrong(fields["255"]) +
    shouldBeWrong(fields["266"]) +
    shouldBeWrong(fields["283"]) +
    shouldBeWrong(fields["284"]) +
    shouldBeWrong(fields["286"]) +
    shouldBeWrong(fields["297"]) +
    shouldBeWrong(fields["314"]) +
    shouldBeWrong(fields["315"]);
  return Pa;
}
export function PtFormula(fields: Record<string, number>) {
  const Pt =
    shouldBeCorrect(fields["11"]) +
    shouldBeCorrect(fields["16"]) +
    shouldBeCorrect(fields["23"]) +
    shouldBeCorrect(fields["31"]) +
    shouldBeCorrect(fields["38"]) +
    shouldBeCorrect(fields["56"]) +
    shouldBeCorrect(fields["65"]) +
    shouldBeCorrect(fields["73"]) +
    shouldBeCorrect(fields["82"]) +
    shouldBeCorrect(fields["89"]) +
    shouldBeCorrect(fields["94"]) +
    shouldBeCorrect(fields["130"]) +
    shouldBeCorrect(fields["147"]) +
    shouldBeCorrect(fields["170"]) +
    shouldBeCorrect(fields["175"]) +
    shouldBeCorrect(fields["196"]) +
    shouldBeCorrect(fields["218"]) +
    shouldBeCorrect(fields["242"]) +
    shouldBeCorrect(fields["273"]) +
    shouldBeCorrect(fields["275"]) +
    shouldBeCorrect(fields["277"]) +
    shouldBeCorrect(fields["285"]) +
    shouldBeCorrect(fields["289"]) +
    shouldBeCorrect(fields["301"]) +
    shouldBeCorrect(fields["302"]) +
    shouldBeCorrect(fields["304"]) +
    shouldBeCorrect(fields["308"]) +
    shouldBeCorrect(fields["309"]) +
    shouldBeCorrect(fields["310"]) +
    shouldBeCorrect(fields["313"]) +
    shouldBeCorrect(fields["316"]) +
    shouldBeCorrect(fields["317"]) +
    shouldBeCorrect(fields["320"]) +
    shouldBeCorrect(fields["325"]) +
    shouldBeCorrect(fields["326"]) +
    shouldBeCorrect(fields["327"]) +
    shouldBeCorrect(fields["328"]) +
    shouldBeCorrect(fields["339"]) +
    shouldBeCorrect(fields["331"]) +
    shouldBeWrong(fields["3"]) +
    shouldBeWrong(fields["9"]) +
    shouldBeWrong(fields["33"]) +
    shouldBeWrong(fields["109"]) +
    shouldBeWrong(fields["140"]) +
    shouldBeWrong(fields["165"]) +
    shouldBeWrong(fields["174"]) +
    shouldBeWrong(fields["293"]) +
    shouldBeWrong(fields["321"]);
  return Pt;
}
export function ScFormula(fields: Record<string, number>) {
  const Sc =
    shouldBeCorrect(fields["16"]) +
    shouldBeCorrect(fields["17"]) +
    shouldBeCorrect(fields["21"]) +
    shouldBeCorrect(fields["22"]) +
    shouldBeCorrect(fields["23"]) +
    shouldBeCorrect(fields["31"]) +
    shouldBeCorrect(fields["32"]) +
    shouldBeCorrect(fields["35"]) +
    shouldBeCorrect(fields["38"]) +
    shouldBeCorrect(fields["42"]) +
    shouldBeCorrect(fields["44"]) +
    shouldBeCorrect(fields["48"]) +
    shouldBeCorrect(fields["65"]) +
    shouldBeCorrect(fields["85"]) +
    shouldBeCorrect(fields["92"]) +
    shouldBeCorrect(fields["138"]) +
    shouldBeCorrect(fields["145"]) +
    shouldBeCorrect(fields["147"]) +
    shouldBeCorrect(fields["166"]) +
    shouldBeCorrect(fields["168"]) +
    shouldBeCorrect(fields["170"]) +
    shouldBeCorrect(fields["180"]) +
    shouldBeCorrect(fields["182"]) +
    shouldBeCorrect(fields["190"]) +
    shouldBeCorrect(fields["218"]) +
    shouldBeCorrect(fields["221"]) +
    shouldBeCorrect(fields["229"]) +
    shouldBeCorrect(fields["233"]) +
    shouldBeCorrect(fields["234"]) +
    shouldBeCorrect(fields["242"]) +
    shouldBeCorrect(fields["247"]) +
    shouldBeCorrect(fields["252"]) +
    shouldBeCorrect(fields["256"]) +
    shouldBeCorrect(fields["268"]) +
    shouldBeCorrect(fields["273"]) +
    shouldBeCorrect(fields["274"]) +
    shouldBeCorrect(fields["277"]) +
    shouldBeCorrect(fields["279"]) +
    shouldBeCorrect(fields["281"]) +
    shouldBeCorrect(fields["287"]) +
    shouldBeCorrect(fields["291"]) +
    shouldBeCorrect(fields["292"]) +
    shouldBeCorrect(fields["296"]) +
    shouldBeCorrect(fields["298"]) +
    shouldBeCorrect(fields["299"]) +
    shouldBeCorrect(fields["303"]) +
    shouldBeCorrect(fields["307"]) +
    shouldBeCorrect(fields["311"]) +
    shouldBeCorrect(fields["316"]) +
    shouldBeCorrect(fields["319"]) +
    shouldBeCorrect(fields["320"]) +
    shouldBeCorrect(fields["322"]) +
    shouldBeCorrect(fields["323"]) +
    shouldBeCorrect(fields["325"]) +
    shouldBeCorrect(fields["329"]) +
    shouldBeCorrect(fields["332"]) +
    shouldBeCorrect(fields["333"]) +
    shouldBeCorrect(fields["355"]) +
    shouldBeWrong(fields["6"]) +
    shouldBeWrong(fields["9"]) +
    shouldBeWrong(fields["12"]) +
    shouldBeWrong(fields["34"]) +
    shouldBeWrong(fields["90"]) +
    shouldBeWrong(fields["91"]) +
    shouldBeWrong(fields["106"]) +
    shouldBeWrong(fields["165"]) +
    shouldBeWrong(fields["177"]) +
    shouldBeWrong(fields["179"]) +
    shouldBeWrong(fields["192"]) +
    shouldBeWrong(fields["210"]) +
    shouldBeWrong(fields["255"]) +
    shouldBeWrong(fields["276"]) +
    shouldBeWrong(fields["278"]) +
    shouldBeWrong(fields["280"]) +
    shouldBeWrong(fields["290"]) +
    shouldBeWrong(fields["295"]) +
    shouldBeWrong(fields["343"]);
  return Sc;
}
export function MaFormula(fields: Record<string, number>) {
  const Ma =
    shouldBeCorrect(fields["13"]) +
    shouldBeCorrect(fields["15"]) +
    shouldBeCorrect(fields["21"]) +
    shouldBeCorrect(fields["23"]) +
    shouldBeCorrect(fields["50"]) +
    shouldBeCorrect(fields["55"]) +
    shouldBeCorrect(fields["61"]) +
    shouldBeCorrect(fields["85"]) +
    shouldBeCorrect(fields["87"]) +
    shouldBeCorrect(fields["98"]) +
    shouldBeCorrect(fields["113"]) +
    shouldBeCorrect(fields["122"]) +
    shouldBeCorrect(fields["131"]) +
    shouldBeCorrect(fields["145"]) +
    shouldBeCorrect(fields["155"]) +
    shouldBeCorrect(fields["168"]) +
    shouldBeCorrect(fields["169"]) +
    shouldBeCorrect(fields["182"]) +
    shouldBeCorrect(fields["190"]) +
    shouldBeCorrect(fields["200"]) +
    shouldBeCorrect(fields["205"]) +
    shouldBeCorrect(fields["206"]) +
    shouldBeCorrect(fields["211"]) +
    shouldBeCorrect(fields["212"]) +
    shouldBeCorrect(fields["218"]) +
    shouldBeCorrect(fields["220"]) +
    shouldBeCorrect(fields["227"]) +
    shouldBeCorrect(fields["229"]) +
    shouldBeCorrect(fields["238"]) +
    shouldBeCorrect(fields["242"]) +
    shouldBeCorrect(fields["244"]) +
    shouldBeCorrect(fields["248"]) +
    shouldBeCorrect(fields["250"]) +
    shouldBeCorrect(fields["253"]) +
    shouldBeCorrect(fields["269"]) +
    shouldBeWrong(fields["88"]) +
    shouldBeWrong(fields["93"]) +
    shouldBeWrong(fields["100"]) +
    shouldBeWrong(fields["106"]) +
    shouldBeWrong(fields["107"]) +
    shouldBeWrong(fields["136"]) +
    shouldBeWrong(fields["154"]) +
    shouldBeWrong(fields["158"]) +
    shouldBeWrong(fields["167"]) +
    shouldBeWrong(fields["243"]) +
    shouldBeWrong(fields["263"]);
  return Ma;
}
export function SiFormula(fields: Record<string, number>) {
  const Si =
    shouldBeCorrect(fields["31"]) +
    shouldBeCorrect(fields["56"]) +
    shouldBeCorrect(fields["70"]) +
    shouldBeCorrect(fields["100"]) +
    shouldBeCorrect(fields["104"]) +
    shouldBeCorrect(fields["110"]) +
    shouldBeCorrect(fields["127"]) +
    shouldBeCorrect(fields["135"]) +
    shouldBeCorrect(fields["158"]) +
    shouldBeCorrect(fields["161"]) +
    shouldBeCorrect(fields["167"]) +
    shouldBeCorrect(fields["185"]) +
    shouldBeCorrect(fields["215"]) +
    shouldBeCorrect(fields["243"]) +
    shouldBeCorrect(fields["251"]) +
    shouldBeCorrect(fields["265"]) +
    shouldBeCorrect(fields["275"]) +
    shouldBeCorrect(fields["284"]) +
    shouldBeCorrect(fields["289"]) +
    shouldBeCorrect(fields["296"]) +
    shouldBeCorrect(fields["302"]) +
    shouldBeCorrect(fields["308"]) +
    shouldBeCorrect(fields["326"]) +
    shouldBeCorrect(fields["337"]) +
    shouldBeCorrect(fields["338"]) +
    shouldBeCorrect(fields["347"]) +
    shouldBeCorrect(fields["348"]) +
    shouldBeCorrect(fields["351"]) +
    shouldBeCorrect(fields["352"]) +
    shouldBeCorrect(fields["357"]) +
    shouldBeCorrect(fields["364"]) +
    shouldBeCorrect(fields["367"]) +
    shouldBeCorrect(fields["368"]) +
    shouldBeCorrect(fields["369"]) +
    shouldBeWrong(fields["25"]) +
    shouldBeWrong(fields["32"]) +
    shouldBeWrong(fields["49"]) +
    shouldBeWrong(fields["79"]) +
    shouldBeWrong(fields["86"]) +
    shouldBeWrong(fields["106"]) +
    shouldBeWrong(fields["112"]) +
    shouldBeWrong(fields["131"]) +
    shouldBeWrong(fields["181"]) +
    shouldBeWrong(fields["189"]) +
    shouldBeWrong(fields["207"]) +
    shouldBeWrong(fields["209"]) +
    shouldBeWrong(fields["231"]) +
    shouldBeWrong(fields["237"]) +
    shouldBeWrong(fields["255"]) +
    shouldBeWrong(fields["262"]) +
    shouldBeWrong(fields["267"]) +
    shouldBeWrong(fields["280"]) +
    shouldBeWrong(fields["321"]) +
    shouldBeWrong(fields["328"]) +
    shouldBeWrong(fields["335"]) +
    shouldBeWrong(fields["340"]) +
    shouldBeWrong(fields["342"]) +
    shouldBeWrong(fields["344"]) +
    shouldBeWrong(fields["345"]) +
    shouldBeWrong(fields["350"]) +
    shouldBeWrong(fields["353"]) +
    shouldBeWrong(fields["354"]) +
    shouldBeWrong(fields["358"]) +
    shouldBeWrong(fields["359"]) +
    shouldBeWrong(fields["360"]) +
    shouldBeWrong(fields["362"]) +
    shouldBeWrong(fields["363"]) +
    shouldBeWrong(fields["366"]) +
    shouldBeWrong(fields["370"]);
  return Si;
}
