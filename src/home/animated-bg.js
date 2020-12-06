import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const AnimatedBG = () => {
  const revealRefs = useRef([])

  useEffect(() => {
    gsap.fromTo(
      revealRefs.current,
      {
        opacity: 0,
        scale: 0.1,
        transformOrigin: "center",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 5,
        transformOrigin: "center",
        ease: "slow(0.7, 0.7, false)",
        stagger: {
          grid: "auto",
          from: "random",
          amount: 10,
          repeat: -1,
          yoyo: true,
          ease: "power3.inOut",
        },
      }
    )
  }, [revealRefs])

  return (
    <svg
      className="absolute w-full min-h-screen h-full inset-0 z-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 562.502"
      preserveAspectRatio="xMaxYMid slice"
    >
      <g transform="scale(.71203)">
        <path fill="#fff" d="M0 0h1404.444v790H0z" />
        <path fill="#fff" d="M0 0h87.778v87.778H0z" />
        <circle
          cx="21.945"
          cy="21.945"
          r="21.945"
          fill="#f7f9fe"
          ref={e => (revealRefs.current[0] = e)}
        />
        <circle
          cx="65.835"
          cy="21.945"
          r="21.945"
          fill="#748aec"
          ref={e => (revealRefs.current[1] = e)}
        />
        <circle
          cx="21.945"
          cy="65.835"
          r="21.945"
          fill="#7e92ed"
          ref={e => (revealRefs.current[2] = e)}
        />
        <circle
          cx="65.835"
          cy="65.835"
          r="21.945"
          fill="#f5f7fe"
          ref={e => (revealRefs.current[3] = e)}
        />
        <circle
          cx="131.67"
          cy="43.89"
          r="43.89"
          fill="#f2f4fd"
          ref={e => (revealRefs.current[4] = e)}
        />
        <path fill="#fff" d="M175.556 0h87.778v87.778h-87.778z" />
        <circle
          cx="197.505"
          cy="21.945"
          r="21.945"
          fill="#778cec"
          ref={e => (revealRefs.current[5] = e)}
        />
        <circle
          cx="241.385"
          cy="21.945"
          r="21.945"
          fill="#f7f9fe"
          ref={e => (revealRefs.current[6] = e)}
        />
        <circle
          cx="197.505"
          cy="65.835"
          r="21.945"
          fill="#8295ee"
          ref={e => (revealRefs.current[7] = e)}
        />
        <circle
          cx="241.385"
          cy="65.835"
          r="21.945"
          fill="#f4f6fd"
          ref={e => (revealRefs.current[8] = e)}
        />
        <path fill="#fff" d="M263.333 0h87.778v87.778h-87.778z" />
        <circle
          cx="285.275"
          cy="21.945"
          r="21.945"
          fill="#abb8f3"
          ref={e => (revealRefs.current[9] = e)}
        />
        <circle
          cx="329.165"
          cy="21.945"
          r="21.945"
          fill="#8a9def"
          ref={e => (revealRefs.current[10] = e)}
        />
        <circle
          cx="285.275"
          cy="65.835"
          r="21.945"
          fill="#f0f2fd"
          ref={e => (revealRefs.current[11] = e)}
        />
        <circle
          cx="329.165"
          cy="65.835"
          r="21.945"
          fill="#e7ebfc"
          ref={e => (revealRefs.current[12] = e)}
        />
        <path fill="#fff" d="M351.111 0h87.778v87.778h-87.778z" />
        <circle
          cx="373.055"
          cy="21.945"
          r="21.945"
          fill="#6f86eb"
          ref={e => (revealRefs.current[13] = e)}
        />
        <circle
          cx="416.945"
          cy="21.945"
          r="21.945"
          fill="#97a7f1"
          ref={e => (revealRefs.current[14] = e)}
        />
        <circle
          cx="373.055"
          cy="65.835"
          r="21.945"
          fill="#7f93ed"
          ref={e => (revealRefs.current[15] = e)}
        />
        <circle
          cx="416.945"
          cy="65.835"
          r="21.945"
          fill="#687fea"
          ref={e => (revealRefs.current[16] = e)}
        />
        <path fill="#fff" d="M438.889 0h87.778v87.778h-87.778z" />
        <circle
          cx="460.835"
          cy="21.945"
          r="21.945"
          fill="#aebbf4"
          ref={e => (revealRefs.current[17] = e)}
        />
        <circle
          cx="504.725"
          cy="21.945"
          r="21.945"
          fill="#bfc9f6"
          ref={e => (revealRefs.current[18] = e)}
        />
        <circle
          cx="460.835"
          cy="65.835"
          r="21.945"
          fill="#8fa0f0"
          ref={e => (revealRefs.current[19] = e)}
        />
        <circle
          cx="504.725"
          cy="65.835"
          r="21.945"
          fill="#fff"
          ref={e => (revealRefs.current[20] = e)}
        />
        <path fill="#fff" d="M526.667 0h87.778v87.778h-87.778z" />
        <circle
          cx="548.615"
          cy="21.945"
          r="21.945"
          fill="#677fea"
          ref={e => (revealRefs.current[21] = e)}
        />
        <circle
          cx="548.615"
          cy="65.835"
          r="21.945"
          fill="#f6f7fe"
          ref={e => (revealRefs.current[22] = e)}
        />
        <circle
          cx="592.505"
          cy="65.835"
          r="21.945"
          fill="#c5cef7"
          ref={e => (revealRefs.current[23] = e)}
        />
        <circle
          cx="658.33"
          cy="43.89"
          r="43.89"
          fill="#8699ee"
          ref={e => (revealRefs.current[24] = e)}
        />
        <circle
          cx="746.11"
          cy="43.89"
          r="43.89"
          fill="#b8c3f5"
          ref={e => (revealRefs.current[25] = e)}
        />
        <circle
          cx="833.89"
          cy="43.89"
          r="43.89"
          fill="#c8d0f7"
          ref={e => (revealRefs.current[26] = e)}
        />
        <path fill="#fff" d="M877.778 0h87.778v87.778h-87.778z" />
        <circle
          cx="899.725"
          cy="21.945"
          r="21.945"
          fill="#f0f2fd"
          ref={e => (revealRefs.current[27] = e)}
        />
        <circle
          cx="943.615"
          cy="21.945"
          r="21.945"
          fill="#f0f2fd"
          ref={e => (revealRefs.current[28] = e)}
        />
        <circle
          cx="899.725"
          cy="65.835"
          r="21.945"
          fill="#d5dbf9"
          ref={e => (revealRefs.current[29] = e)}
        />
        <circle
          cx="943.615"
          cy="65.835"
          r="21.945"
          fill="#a3b1f2"
          ref={e => (revealRefs.current[30] = e)}
        />
        <path fill="#fff" d="M965.556 0h87.778v87.778h-87.778z" />
        <circle
          cx="987.505"
          cy="21.945"
          r="21.945"
          fill="#9faef2"
          ref={e => (revealRefs.current[31] = e)}
        />
        <circle
          cx="1031.385"
          cy="21.945"
          r="21.945"
          fill="#d3daf9"
          ref={e => (revealRefs.current[32] = e)}
        />
        <circle
          cx="987.505"
          cy="65.835"
          r="21.945"
          fill="#d1d8f9"
          ref={e => (revealRefs.current[33] = e)}
        />
        <circle
          cx="1031.385"
          cy="65.835"
          r="21.945"
          fill="#ced6f8"
          ref={e => (revealRefs.current[34] = e)}
        />
        <circle
          cx="1097.22"
          cy="43.89"
          r="43.89"
          fill="#fdfeff"
          ref={e => (revealRefs.current[35] = e)}
        />
        <circle
          cx="1185"
          cy="43.89"
          r="43.89"
          fill="#8d9fef"
          ref={e => (revealRefs.current[36] = e)}
        />
        <circle
          cx="1272.78"
          cy="43.89"
          r="43.89"
          fill="#8397ee"
          ref={e => (revealRefs.current[37] = e)}
        />
        <circle
          cx="1360.56"
          cy="43.89"
          r="43.89"
          fill="#8fa1f0"
          ref={e => (revealRefs.current[38] = e)}
        />
        <path fill="#fff" d="M0 87.778h87.778v87.778H0z" />
        <circle
          cx="21.945"
          cy="109.725"
          r="21.945"
          fill="#8396ee"
          ref={e => (revealRefs.current[39] = e)}
        />
        <circle
          cx="65.835"
          cy="109.725"
          r="21.945"
          fill="#b4c0f5"
          ref={e => (revealRefs.current[40] = e)}
        />
        <circle
          cx="21.945"
          cy="153.615"
          r="21.945"
          fill="#94a5f0"
          ref={e => (revealRefs.current[41] = e)}
        />
        <circle
          cx="65.835"
          cy="153.615"
          r="21.945"
          fill="#7187ec"
          ref={e => (revealRefs.current[42] = e)}
        />
        <path fill="#fff" d="M87.778 87.778h87.778v87.778H87.778z" />
        <circle
          cx="109.725"
          cy="109.725"
          r="21.945"
          fill="#768bec"
          ref={e => (revealRefs.current[43] = e)}
        />
        <circle
          cx="153.615"
          cy="109.725"
          r="21.945"
          fill="#d1d8f9"
          ref={e => (revealRefs.current[44] = e)}
        />
        <circle
          cx="109.725"
          cy="153.615"
          r="21.945"
          fill="#9eadf2"
          ref={e => (revealRefs.current[45] = e)}
        />
        <circle
          cx="153.615"
          cy="153.615"
          r="21.945"
          fill="#8fa1f0"
          ref={e => (revealRefs.current[46] = e)}
        />
        <circle
          cx="219.45"
          cy="131.67"
          r="43.89"
          fill="#94a5f0"
          ref={e => (revealRefs.current[47] = e)}
        />
        <path fill="#fff" d="M263.333 87.778h87.778v87.778h-87.778z" />
        <circle
          cx="285.275"
          cy="109.725"
          r="21.945"
          fill="#dde2fa"
          ref={e => (revealRefs.current[48] = e)}
        />
        <circle
          cx="329.165"
          cy="109.725"
          r="21.945"
          fill="#a1b0f2"
          ref={e => (revealRefs.current[49] = e)}
        />
        <circle
          cx="285.275"
          cy="153.615"
          r="21.945"
          fill="#e2e7fb"
          ref={e => (revealRefs.current[50] = e)}
        />
        <circle
          cx="329.165"
          cy="153.615"
          r="21.945"
          fill="#9babf1"
          ref={e => (revealRefs.current[51] = e)}
        />
        <circle
          cx="395"
          cy="131.67"
          r="43.89"
          fill="#788eed"
          ref={e => (revealRefs.current[52] = e)}
        />
        <path fill="#fff" d="M438.889 87.778h87.778v87.778h-87.778z" />
        <circle
          cx="460.835"
          cy="109.725"
          r="21.945"
          fill="#aab7f3"
          ref={e => (revealRefs.current[53] = e)}
        />
        <circle
          cx="504.725"
          cy="109.725"
          r="21.945"
          fill="#feffff"
          ref={e => (revealRefs.current[54] = e)}
        />
        <circle
          cx="460.835"
          cy="153.615"
          r="21.945"
          fill="#96a6f1"
          ref={e => (revealRefs.current[55] = e)}
        />
        <circle
          cx="504.725"
          cy="153.615"
          r="21.945"
          fill="#f3f4fd"
          ref={e => (revealRefs.current[56] = e)}
        />
        <circle
          cx="570.56"
          cy="131.67"
          r="43.89"
          fill="#dae0fa"
          ref={e => (revealRefs.current[57] = e)}
        />
        <circle
          cx="658.33"
          cy="131.67"
          r="43.89"
          fill="#cfd7f8"
          ref={e => (revealRefs.current[58] = e)}
        />
        <path fill="#fff" d="M702.222 87.778H790v87.778h-87.778z" />
        <circle
          cx="724.165"
          cy="109.725"
          r="21.945"
          fill="#90a1f0"
          ref={e => (revealRefs.current[59] = e)}
        />
        <circle
          cx="768.055"
          cy="109.725"
          r="21.945"
          fill="#7086eb"
          ref={e => (revealRefs.current[60] = e)}
        />
        <circle
          cx="724.165"
          cy="153.615"
          r="21.945"
          fill="#7f93ed"
          ref={e => (revealRefs.current[61] = e)}
        />
        <circle
          cx="768.055"
          cy="153.615"
          r="21.945"
          fill="#889bef"
          ref={e => (revealRefs.current[62] = e)}
        />
        <path fill="#fff" d="M790 87.778h87.778v87.778H790z" />
        <circle
          cx="811.945"
          cy="109.725"
          r="21.945"
          fill="#9faef2"
          ref={e => (revealRefs.current[63] = e)}
        />
        <circle
          cx="855.835"
          cy="109.725"
          r="21.945"
          fill="#a5b3f3"
          ref={e => (revealRefs.current[64] = e)}
        />
        <circle
          cx="811.945"
          cy="153.615"
          r="21.945"
          fill="#dde3fa"
          ref={e => (revealRefs.current[65] = e)}
        />
        <circle
          cx="855.835"
          cy="153.615"
          r="21.945"
          fill="#6a82eb"
          ref={e => (revealRefs.current[66] = e)}
        />
        <path fill="#fff" d="M877.778 87.778h87.778v87.778h-87.778z" />
        <circle
          cx="899.725"
          cy="109.725"
          r="21.945"
          fill="#e2e7fb"
          ref={e => (revealRefs.current[67] = e)}
        />
        <circle
          cx="943.615"
          cy="109.725"
          r="21.945"
          fill="#e8ecfc"
          ref={e => (revealRefs.current[68] = e)}
        />
        <circle
          cx="899.725"
          cy="153.615"
          r="21.945"
          fill="#d9dffa"
          ref={e => (revealRefs.current[69] = e)}
        />
        <circle
          cx="943.615"
          cy="153.615"
          r="21.945"
          fill="#a2b1f2"
          ref={e => (revealRefs.current[70] = e)}
        />
        <path fill="#fff" d="M965.556 87.778h87.778v87.778h-87.778z" />
        <circle
          cx="987.505"
          cy="109.725"
          r="21.945"
          fill="#6880ea"
          ref={e => (revealRefs.current[71] = e)}
        />
        <circle
          cx="1031.385"
          cy="109.725"
          r="21.945"
          fill="#d1d8f9"
          ref={e => (revealRefs.current[72] = e)}
        />
        <circle
          cx="987.505"
          cy="153.615"
          r="21.945"
          fill="#d2d9f9"
          ref={e => (revealRefs.current[73] = e)}
        />
        <circle
          cx="1031.385"
          cy="153.615"
          r="21.945"
          fill="#fbfcff"
          ref={e => (revealRefs.current[74] = e)}
        />
        <circle
          cx="1097.22"
          cy="131.67"
          r="43.89"
          fill="#e7ebfc"
          ref={e => (revealRefs.current[75] = e)}
        />
        <path fill="#fff" d="M1141.111 87.778h87.778v87.778h-87.778z" />
        <circle
          cx="1163.055"
          cy="109.725"
          r="21.945"
          fill="#dae0fa"
          ref={e => (revealRefs.current[76] = e)}
        />
        <circle
          cx="1206.945"
          cy="109.725"
          r="21.945"
          fill="#fafbfe"
          ref={e => (revealRefs.current[77] = e)}
        />
        <circle
          cx="1163.055"
          cy="153.615"
          r="21.945"
          fill="#c3cdf7"
          ref={e => (revealRefs.current[78] = e)}
        />
        <circle
          cx="1206.945"
          cy="153.615"
          r="21.945"
          fill="#ebeffc"
          ref={e => (revealRefs.current[79] = e)}
        />
        <path fill="#fff" d="M1228.889 87.778h87.778v87.778h-87.778z" />
        <circle
          cx="1250.835"
          cy="109.725"
          r="21.945"
          fill="#f9fafe"
          ref={e => (revealRefs.current[80] = e)}
        />
        <circle
          cx="1294.725"
          cy="109.725"
          r="21.945"
          fill="#7b90ed"
          ref={e => (revealRefs.current[81] = e)}
        />
        <circle
          cx="1250.835"
          cy="153.615"
          r="21.945"
          fill="#b6c1f5"
          ref={e => (revealRefs.current[82] = e)}
        />
        <circle
          cx="1294.725"
          cy="153.615"
          r="21.945"
          fill="#fbfbfe"
          ref={e => (revealRefs.current[83] = e)}
        />
        <path fill="#fff" d="M1316.667 87.778h87.778v87.778h-87.778z" />
        <circle
          cx="1338.615"
          cy="109.725"
          r="21.945"
          fill="#748aec"
          ref={e => (revealRefs.current[84] = e)}
        />
        <circle
          cx="1382.505"
          cy="109.725"
          r="21.945"
          fill="#d0d7f9"
          ref={e => (revealRefs.current[85] = e)}
        />
        <circle
          cx="1338.615"
          cy="153.615"
          r="21.945"
          fill="#dbe0fa"
          ref={e => (revealRefs.current[86] = e)}
        />
        <circle
          cx="1382.505"
          cy="153.615"
          r="21.945"
          fill="#e5e9fb"
          ref={e => (revealRefs.current[87] = e)}
        />
        <path fill="#fff" d="M0 175.556h87.778v87.778H0z" />
        <circle
          cx="21.945"
          cy="197.505"
          r="21.945"
          fill="#7b90ed"
          ref={e => (revealRefs.current[88] = e)}
        />
        <circle
          cx="65.835"
          cy="197.505"
          r="21.945"
          fill="#7b8fed"
          ref={e => (revealRefs.current[89] = e)}
        />
        <circle
          cx="21.945"
          cy="241.385"
          r="21.945"
          fill="#c6cff7"
          ref={e => (revealRefs.current[90] = e)}
        />
        <circle
          cx="65.835"
          cy="241.385"
          r="21.945"
          fill="#9eadf2"
          ref={e => (revealRefs.current[91] = e)}
        />
        <path fill="#fff" d="M87.778 175.556h87.778v87.778H87.778z" />
        <circle
          cx="109.725"
          cy="197.505"
          r="21.945"
          fill="#6e85eb"
          ref={e => (revealRefs.current[92] = e)}
        />
        <circle
          cx="153.615"
          cy="197.505"
          r="21.945"
          fill="#bcc6f6"
          ref={e => (revealRefs.current[93] = e)}
        />
        <circle
          cx="109.725"
          cy="241.385"
          r="21.945"
          fill="#6f86eb"
          ref={e => (revealRefs.current[94] = e)}
        />
        <circle
          cx="153.615"
          cy="241.385"
          r="21.945"
          fill="#677fea"
          ref={e => (revealRefs.current[95] = e)}
        />
        <circle
          cx="219.45"
          cy="219.45"
          r="43.89"
          fill="#a4b2f2"
          ref={e => (revealRefs.current[96] = e)}
        />
        <circle
          cx="307.22"
          cy="219.45"
          r="43.89"
          fill="#9aaaf1"
          ref={e => (revealRefs.current[97] = e)}
        />
        <circle
          cx="395"
          cy="219.45"
          r="43.89"
          fill="#b3bff5"
          ref={e => (revealRefs.current[98] = e)}
        />
        <path fill="#fff" d="M438.889 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="460.835"
          cy="197.505"
          r="21.945"
          fill="#bec8f6"
          ref={e => (revealRefs.current[99] = e)}
        />
        <circle
          cx="504.725"
          cy="197.505"
          r="21.945"
          fill="#fafbfe"
          ref={e => (revealRefs.current[100] = e)}
        />
        <circle
          cx="460.835"
          cy="241.385"
          r="21.945"
          fill="#adbaf4"
          ref={e => (revealRefs.current[101] = e)}
        />
        <circle
          cx="504.725"
          cy="241.385"
          r="21.945"
          fill="#8b9eef"
          ref={e => (revealRefs.current[102] = e)}
        />
        <circle
          cx="570.56"
          cy="219.45"
          r="43.89"
          fill="#dbe1fa"
          ref={e => (revealRefs.current[103] = e)}
        />
        <path fill="#fff" d="M614.444 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="636.385"
          cy="197.505"
          r="21.945"
          fill="#eaedfc"
          ref={e => (revealRefs.current[104] = e)}
        />
        <circle
          cx="680.275"
          cy="197.505"
          r="21.945"
          fill="#cfd6f8"
          ref={e => (revealRefs.current[105] = e)}
        />
        <circle
          cx="636.385"
          cy="241.385"
          r="21.945"
          fill="#a2b1f2"
          ref={e => (revealRefs.current[106] = e)}
        />
        <circle
          cx="680.275"
          cy="241.385"
          r="21.945"
          fill="#eceffc"
          ref={e => (revealRefs.current[107] = e)}
        />
        <path fill="#fff" d="M702.222 175.556H790v87.778h-87.778z" />
        <circle
          cx="724.165"
          cy="197.505"
          r="21.945"
          fill="#7086eb"
          ref={e => (revealRefs.current[108] = e)}
        />
        <circle
          cx="768.055"
          cy="197.505"
          r="21.945"
          fill="#7389ec"
          ref={e => (revealRefs.current[109] = e)}
        />
        <circle
          cx="724.165"
          cy="241.385"
          r="21.945"
          fill="#dde2fa"
          ref={e => (revealRefs.current[110] = e)}
        />
        <circle
          cx="768.055"
          cy="241.385"
          r="21.945"
          fill="#d6ddf9"
          ref={e => (revealRefs.current[111] = e)}
        />
        <path fill="#fff" d="M790 175.556h87.778v87.778H790z" />
        <circle
          cx="811.945"
          cy="197.505"
          r="21.945"
          fill="#d9dffa"
          ref={e => (revealRefs.current[112] = e)}
        />
        <circle
          cx="855.835"
          cy="197.505"
          r="21.945"
          fill="#d6dcf9"
          ref={e => (revealRefs.current[113] = e)}
        />
        <circle
          cx="811.945"
          cy="241.385"
          r="21.945"
          fill="#a5b3f3"
          ref={e => (revealRefs.current[114] = e)}
        />
        <circle
          cx="855.835"
          cy="241.385"
          r="21.945"
          fill="#c0caf6"
          ref={e => (revealRefs.current[115] = e)}
        />
        <path fill="#fff" d="M877.778 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="899.725"
          cy="197.505"
          r="21.945"
          fill="#f9fafe"
          ref={e => (revealRefs.current[116] = e)}
        />
        <circle
          cx="943.615"
          cy="197.505"
          r="21.945"
          fill="#fcfcff"
          ref={e => (revealRefs.current[117] = e)}
        />
        <circle
          cx="899.725"
          cy="241.385"
          r="21.945"
          fill="#a9b7f3"
          ref={e => (revealRefs.current[118] = e)}
        />
        <circle
          cx="943.615"
          cy="241.385"
          r="21.945"
          fill="#a0aff2"
          ref={e => (revealRefs.current[119] = e)}
        />
        <path fill="#fff" d="M965.556 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="987.505"
          cy="197.505"
          r="21.945"
          fill="#e5e9fb"
          ref={e => (revealRefs.current[120] = e)}
        />
        <circle
          cx="1031.385"
          cy="197.505"
          r="21.945"
          fill="#d3daf9"
          ref={e => (revealRefs.current[121] = e)}
        />
        <circle
          cx="987.505"
          cy="241.385"
          r="21.945"
          fill="#7e92ed"
          ref={e => (revealRefs.current[122] = e)}
        />
        <circle
          cx="1031.385"
          cy="241.385"
          r="21.945"
          fill="#aebaf4"
          ref={e => (revealRefs.current[123] = e)}
        />
        <path fill="#fff" d="M1053.333 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="1075.275"
          cy="197.505"
          r="21.945"
          fill="#a3b1f2"
          ref={e => (revealRefs.current[124] = e)}
        />
        <circle
          cx="1119.165"
          cy="197.505"
          r="21.945"
          fill="#8c9eef"
          ref={e => (revealRefs.current[125] = e)}
        />
        <circle
          cx="1075.275"
          cy="241.385"
          r="21.945"
          fill="#97a7f1"
          ref={e => (revealRefs.current[126] = e)}
        />
        <circle
          cx="1119.165"
          cy="241.385"
          r="21.945"
          fill="#8194ee"
          ref={e => (revealRefs.current[127] = e)}
        />
        <path fill="#fff" d="M1141.111 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="1163.055"
          cy="197.505"
          r="21.945"
          fill="#d7defa"
          ref={e => (revealRefs.current[128] = e)}
        />
        <circle
          cx="1206.945"
          cy="197.505"
          r="21.945"
          fill="#e8ebfc"
          ref={e => (revealRefs.current[129] = e)}
        />
        <circle
          cx="1163.055"
          cy="241.385"
          r="21.945"
          fill="#8598ee"
          ref={e => (revealRefs.current[130] = e)}
        />
        <circle
          cx="1206.945"
          cy="241.385"
          r="21.945"
          fill="#b4c0f5"
          ref={e => (revealRefs.current[131] = e)}
        />
        <path fill="#fff" d="M1228.889 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="1250.835"
          cy="197.505"
          r="21.945"
          fill="#fdfeff"
          ref={e => (revealRefs.current[132] = e)}
        />
        <circle
          cx="1294.725"
          cy="197.505"
          r="21.945"
          fill="#c1cbf6"
          ref={e => (revealRefs.current[133] = e)}
        />
        <circle
          cx="1250.835"
          cy="241.385"
          r="21.945"
          fill="#d2d9f9"
          ref={e => (revealRefs.current[134] = e)}
        />
        <circle
          cx="1294.725"
          cy="241.385"
          r="21.945"
          fill="#b4c0f5"
          ref={e => (revealRefs.current[135] = e)}
        />
        <path fill="#fff" d="M1316.667 175.556h87.778v87.778h-87.778z" />
        <circle
          cx="1338.615"
          cy="197.505"
          r="21.945"
          fill="#788ded"
          ref={e => (revealRefs.current[136] = e)}
        />
        <circle
          cx="1382.505"
          cy="197.505"
          r="21.945"
          fill="#7f93ed"
          ref={e => (revealRefs.current[137] = e)}
        />
        <circle
          cx="1338.615"
          cy="241.385"
          r="21.945"
          fill="#dfe4fb"
          ref={e => (revealRefs.current[138] = e)}
        />
        <circle
          cx="1382.505"
          cy="241.385"
          r="21.945"
          fill="#d0d7f9"
          ref={e => (revealRefs.current[139] = e)}
        />
        <path fill="#fff" d="M0 263.333h87.778v87.778H0z" />
        <circle
          cx="21.945"
          cy="285.275"
          r="21.945"
          fill="#7a8fed"
          ref={e => (revealRefs.current[140] = e)}
        />
        <circle
          cx="65.835"
          cy="285.275"
          r="21.945"
          fill="#677eea"
          ref={e => (revealRefs.current[141] = e)}
        />
        <circle
          cx="21.945"
          cy="329.165"
          r="21.945"
          fill="#c2cbf7"
          ref={e => (revealRefs.current[142] = e)}
        />
        <circle
          cx="65.835"
          cy="329.165"
          r="21.945"
          fill="#a8b6f3"
          ref={e => (revealRefs.current[143] = e)}
        />
        <path fill="#fff" d="M87.778 263.333h87.778v87.778H87.778z" />
        <circle
          cx="109.725"
          cy="285.275"
          r="21.945"
          fill="#788dec"
          ref={e => (revealRefs.current[144] = e)}
        />
        <circle
          cx="153.615"
          cy="285.275"
          r="21.945"
          fill="#cfd7f8"
          ref={e => (revealRefs.current[145] = e)}
        />
        <circle
          cx="109.725"
          cy="329.165"
          r="21.945"
          fill="#f4f6fd"
          ref={e => (revealRefs.current[146] = e)}
        />
        <circle
          cx="153.615"
          cy="329.165"
          r="21.945"
          fill="#d0d7f8"
          ref={e => (revealRefs.current[147] = e)}
        />
        <path fill="#fff" d="M175.556 263.333h87.778v87.778h-87.778z" />
        <circle
          cx="197.505"
          cy="285.275"
          r="21.945"
          fill="#99a9f1"
          ref={e => (revealRefs.current[148] = e)}
        />
        <circle
          cx="241.385"
          cy="285.275"
          r="21.945"
          fill="#6f86eb"
          ref={e => (revealRefs.current[149] = e)}
        />
        <circle
          cx="197.505"
          cy="329.165"
          r="21.945"
          fill="#f1f3fd"
          ref={e => (revealRefs.current[150] = e)}
        />
        <circle
          cx="241.385"
          cy="329.165"
          r="21.945"
          fill="#8598ee"
          ref={e => (revealRefs.current[151] = e)}
        />
        <path fill="#fff" d="M263.333 263.333h87.778v87.778h-87.778z" />
        <circle
          cx="285.275"
          cy="285.275"
          r="21.945"
          fill="#eaeefc"
          ref={e => (revealRefs.current[152] = e)}
        />
        <circle
          cx="329.165"
          cy="285.275"
          r="21.945"
          fill="#7f93ed"
          ref={e => (revealRefs.current[153] = e)}
        />
        <circle
          cx="285.275"
          cy="329.165"
          r="21.945"
          fill="#f1f3fd"
          ref={e => (revealRefs.current[154] = e)}
        />
        <circle
          cx="329.165"
          cy="329.165"
          r="21.945"
          fill="#7d91ed"
          ref={e => (revealRefs.current[155] = e)}
        />
        <circle
          cx="395"
          cy="307.22"
          r="43.89"
          fill="#bec8f6"
          ref={e => (revealRefs.current[156] = e)}
        />
        <circle
          cx="482.78"
          cy="307.22"
          r="43.89"
          fill="#cdd5f8"
          ref={e => (revealRefs.current[157] = e)}
        />
        <circle
          cx="570.56"
          cy="307.22"
          r="43.89"
          fill="#8c9eef"
          ref={e => (revealRefs.current[158] = e)}
        />
        <circle
          cx="658.33"
          cy="307.22"
          r="43.89"
          fill="#6e85eb"
          ref={e => (revealRefs.current[159] = e)}
        />
        <path fill="#fff" d="M702.222 263.333H790v87.778h-87.778z" />
        <circle
          cx="724.165"
          cy="285.275"
          r="21.945"
          fill="#bdc8f6"
          ref={e => (revealRefs.current[160] = e)}
        />
        <circle
          cx="768.055"
          cy="285.275"
          r="21.945"
          fill="#a1b0f2"
          ref={e => (revealRefs.current[161] = e)}
        />
        <circle
          cx="724.165"
          cy="329.165"
          r="21.945"
          fill="#dae0fa"
          ref={e => (revealRefs.current[162] = e)}
        />
        <circle
          cx="768.055"
          cy="329.165"
          r="21.945"
          fill="#b3bff5"
          ref={e => (revealRefs.current[163] = e)}
        />
        <path fill="#fff" d="M790 263.333h87.778v87.778H790z" />
        <circle
          cx="811.945"
          cy="285.275"
          r="21.945"
          fill="#899bef"
          ref={e => (revealRefs.current[164] = e)}
        />
        <circle
          cx="855.835"
          cy="285.275"
          r="21.945"
          fill="#6a82eb"
          ref={e => (revealRefs.current[165] = e)}
        />
        <circle
          cx="811.945"
          cy="329.165"
          r="21.945"
          fill="#aebaf4"
          ref={e => (revealRefs.current[166] = e)}
        />
        <circle
          cx="855.835"
          cy="329.165"
          r="21.945"
          fill="#aebbf4"
          ref={e => (revealRefs.current[167] = e)}
        />
        <path fill="#fff" d="M877.778 263.333h87.778v87.778h-87.778z" />
        <circle
          cx="899.725"
          cy="285.275"
          r="21.945"
          fill="#7b8fed"
          ref={e => (revealRefs.current[168] = e)}
        />
        <circle
          cx="943.615"
          cy="285.275"
          r="21.945"
          fill="#8094ee"
          ref={e => (revealRefs.current[169] = e)}
        />
        <circle
          cx="899.725"
          cy="329.165"
          r="21.945"
          fill="#97a7f1"
          ref={e => (revealRefs.current[170] = e)}
        />
        <circle
          cx="943.615"
          cy="329.165"
          r="21.945"
          fill="#8d9fef"
          ref={e => (revealRefs.current[171] = e)}
        />
        <circle
          cx="1009.45"
          cy="307.22"
          r="43.89"
          fill="#cfd7f8"
          ref={e => (revealRefs.current[172] = e)}
        />
        <circle
          cx="1097.22"
          cy="307.22"
          r="43.89"
          fill="#6880ea"
          ref={e => (revealRefs.current[173] = e)}
        />
        <path fill="#fff" d="M1141.111 263.333h87.778v87.778h-87.778z" />
        <circle
          cx="1163.055"
          cy="285.275"
          r="21.945"
          fill="#a1b0f2"
          ref={e => (revealRefs.current[174] = e)}
        />
        <circle
          cx="1206.945"
          cy="285.275"
          r="21.945"
          fill="#eff2fd"
          ref={e => (revealRefs.current[175] = e)}
        />
        <circle
          cx="1163.055"
          cy="329.165"
          r="21.945"
          fill="#aab7f3"
          ref={e => (revealRefs.current[176] = e)}
        />
        <circle
          cx="1206.945"
          cy="329.165"
          r="21.945"
          fill="#6f85eb"
          ref={e => (revealRefs.current[177] = e)}
        />
        <circle
          cx="1272.78"
          cy="307.22"
          r="43.89"
          fill="#879aef"
          ref={e => (revealRefs.current[178] = e)}
        />
        <path fill="#fff" d="M1316.667 263.333h87.778v87.778h-87.778z" />
        <circle
          cx="1338.615"
          cy="285.275"
          r="21.945"
          fill="#90a1f0"
          ref={e => (revealRefs.current[179] = e)}
        />
        <circle
          cx="1382.505"
          cy="285.275"
          r="21.945"
          fill="#7389ec"
          ref={e => (revealRefs.current[180] = e)}
        />
        <circle
          cx="1338.615"
          cy="329.165"
          r="21.945"
          fill="#d0d7f9"
          ref={e => (revealRefs.current[181] = e)}
        />
        <circle
          cx="1382.505"
          cy="329.165"
          r="21.945"
          fill="#eceffc"
          ref={e => (revealRefs.current[182] = e)}
        />
        <path fill="#fff" d="M0 351.111h87.778v87.778H0z" />
        <circle
          cx="21.945"
          cy="373.055"
          r="21.945"
          fill="#e3e8fb"
          ref={e => (revealRefs.current[183] = e)}
        />
        <circle
          cx="65.835"
          cy="373.055"
          r="21.945"
          fill="#e8ecfc"
          ref={e => (revealRefs.current[184] = e)}
        />
        <circle
          cx="21.945"
          cy="416.945"
          r="21.945"
          fill="#9cacf1"
          ref={e => (revealRefs.current[185] = e)}
        />
        <circle
          cx="65.835"
          cy="416.945"
          r="21.945"
          fill="#8195ee"
          ref={e => (revealRefs.current[186] = e)}
        />
        <path fill="#fff" d="M87.778 351.111h87.778v87.778H87.778z" />
        <circle
          cx="109.725"
          cy="373.055"
          r="21.945"
          fill="#889bef"
          ref={e => (revealRefs.current[187] = e)}
        />
        <circle
          cx="153.615"
          cy="373.055"
          r="21.945"
          fill="#d4daf9"
          ref={e => (revealRefs.current[188] = e)}
        />
        <circle
          cx="109.725"
          cy="416.945"
          r="21.945"
          fill="#bac5f6"
          ref={e => (revealRefs.current[189] = e)}
        />
        <circle
          cx="153.615"
          cy="416.945"
          r="21.945"
          fill="#c9d1f8"
          ref={e => (revealRefs.current[190] = e)}
        />
        <circle
          cx="219.45"
          cy="395"
          r="43.89"
          fill="#b7c2f5"
          ref={e => (revealRefs.current[191] = e)}
        />
        <circle
          cx="307.22"
          cy="395"
          r="43.89"
          fill="#e4e8fb"
          ref={e => (revealRefs.current[192] = e)}
        />
        <circle
          cx="395"
          cy="395"
          r="43.89"
          fill="#b4bff5"
          ref={e => (revealRefs.current[193] = e)}
        />
        <path fill="#fff" d="M438.889 351.111h87.778v87.778h-87.778z" />
        <circle
          cx="460.835"
          cy="373.055"
          r="21.945"
          fill="#b5c0f5"
          ref={e => (revealRefs.current[194] = e)}
        />
        <circle
          cx="504.725"
          cy="373.055"
          r="21.945"
          fill="#c9d2f8"
          ref={e => (revealRefs.current[195] = e)}
        />
        <circle
          cx="460.835"
          cy="416.945"
          r="21.945"
          fill="#f7f8fe"
          ref={e => (revealRefs.current[196] = e)}
        />
        <circle
          cx="504.725"
          cy="416.945"
          r="21.945"
          fill="#758bec"
          ref={e => (revealRefs.current[197] = e)}
        />
        <circle
          cx="570.56"
          cy="395"
          r="43.89"
          fill="#f2f4fd"
          ref={e => (revealRefs.current[198] = e)}
        />
        <circle
          cx="658.33"
          cy="395"
          r="43.89"
          fill="#cdd5f8"
          ref={e => (revealRefs.current[199] = e)}
        />
        <circle
          cx="746.11"
          cy="395"
          r="43.89"
          fill="#6c83eb"
          ref={e => (revealRefs.current[200] = e)}
        />
        <circle
          cx="833.89"
          cy="395"
          r="43.89"
          fill="#fcfcff"
          ref={e => (revealRefs.current[201] = e)}
        />
        <circle
          cx="921.67"
          cy="395"
          r="43.89"
          fill="#d4dbf9"
          ref={e => (revealRefs.current[202] = e)}
        />
        <circle
          cx="1009.45"
          cy="395"
          r="43.89"
          fill="#c0caf6"
          ref={e => (revealRefs.current[203] = e)}
        />
        <path fill="#fff" d="M1053.333 351.111h87.778v87.778h-87.778z" />
        <circle
          cx="1075.275"
          cy="373.055"
          r="21.945"
          fill="#f9fafe"
          ref={e => (revealRefs.current[204] = e)}
        />
        <circle
          cx="1119.165"
          cy="373.055"
          r="21.945"
          fill="#a8b6f3"
          ref={e => (revealRefs.current[205] = e)}
        />
        <circle
          cx="1075.275"
          cy="416.945"
          r="21.945"
          fill="#8598ee"
          ref={e => (revealRefs.current[206] = e)}
        />
        <circle
          cx="1119.165"
          cy="416.945"
          r="21.945"
          fill="#c1caf6"
          ref={e => (revealRefs.current[207] = e)}
        />
        <path fill="#fff" d="M1141.111 351.111h87.778v87.778h-87.778z" />
        <circle
          cx="1163.055"
          cy="373.055"
          r="21.945"
          fill="#eef1fd"
          ref={e => (revealRefs.current[208] = e)}
        />
        <circle
          cx="1206.945"
          cy="373.055"
          r="21.945"
          fill="#f2f4fd"
          ref={e => (revealRefs.current[209] = e)}
        />
        <circle
          cx="1163.055"
          cy="416.945"
          r="21.945"
          fill="#fefeff"
          ref={e => (revealRefs.current[210] = e)}
        />
        <circle
          cx="1206.945"
          cy="416.945"
          r="21.945"
          fill="#f0f2fd"
          ref={e => (revealRefs.current[211] = e)}
        />
        <path fill="#fff" d="M1228.889 351.111h87.778v87.778h-87.778z" />
        <circle
          cx="1250.835"
          cy="373.055"
          r="21.945"
          fill="#7a8fed"
          ref={e => (revealRefs.current[212] = e)}
        />
        <circle
          cx="1294.725"
          cy="373.055"
          r="21.945"
          fill="#b5c1f5"
          ref={e => (revealRefs.current[213] = e)}
        />
        <circle
          cx="1250.835"
          cy="416.945"
          r="21.945"
          fill="#a4b3f3"
          ref={e => (revealRefs.current[214] = e)}
        />
        <circle
          cx="1294.725"
          cy="416.945"
          r="21.945"
          fill="#d8defa"
          ref={e => (revealRefs.current[215] = e)}
        />
        <circle
          cx="1360.56"
          cy="395"
          r="43.89"
          fill="#a7b4f3"
          ref={e => (revealRefs.current[216] = e)}
        />
        <path fill="#fff" d="M0 438.889h87.778v87.778H0z" />
        <circle
          cx="21.945"
          cy="460.835"
          r="21.945"
          fill="#d1d9f9"
          ref={e => (revealRefs.current[217] = e)}
        />
        <circle
          cx="65.835"
          cy="460.835"
          r="21.945"
          fill="#bac5f6"
          ref={e => (revealRefs.current[218] = e)}
        />
        <circle
          cx="21.945"
          cy="504.725"
          r="21.945"
          fill="#f5f7fe"
          ref={e => (revealRefs.current[219] = e)}
        />
        <circle
          cx="65.835"
          cy="504.725"
          r="21.945"
          fill="#d4daf9"
          ref={e => (revealRefs.current[220] = e)}
        />
        <circle
          cx="131.67"
          cy="482.78"
          r="43.89"
          fill="#8599ee"
          ref={e => (revealRefs.current[221] = e)}
        />
        <circle
          cx="219.45"
          cy="482.78"
          r="43.89"
          fill="#6b82eb"
          ref={e => (revealRefs.current[222] = e)}
        />
        <circle
          cx="307.22"
          cy="482.78"
          r="43.89"
          fill="#6a81eb"
          ref={e => (revealRefs.current[223] = e)}
        />
        <path fill="#fff" d="M351.111 438.889h87.778v87.778h-87.778z" />
        <circle
          cx="373.055"
          cy="460.835"
          r="21.945"
          fill="#778dec"
          ref={e => (revealRefs.current[224] = e)}
        />
        <circle
          cx="416.945"
          cy="460.835"
          r="21.945"
          fill="#eef1fd"
          ref={e => (revealRefs.current[225] = e)}
        />
        <circle
          cx="373.055"
          cy="504.725"
          r="21.945"
          fill="#788dec"
          ref={e => (revealRefs.current[226] = e)}
        />
        <circle
          cx="416.945"
          cy="504.725"
          r="21.945"
          fill="#9dacf2"
          ref={e => (revealRefs.current[227] = e)}
        />
        <circle
          cx="482.78"
          cy="482.78"
          r="43.89"
          fill="#a0aff2"
          ref={e => (revealRefs.current[228] = e)}
        />
        <circle
          cx="570.56"
          cy="482.78"
          r="43.89"
          fill="#7087eb"
          ref={e => (revealRefs.current[229] = e)}
        />
        <path fill="#fff" d="M614.444 438.889h87.778v87.778h-87.778z" />
        <circle
          cx="636.385"
          cy="460.835"
          r="21.945"
          fill="#7b90ed"
          ref={e => (revealRefs.current[230] = e)}
        />
        <circle
          cx="680.275"
          cy="460.835"
          r="21.945"
          fill="#b0bcf4"
          ref={e => (revealRefs.current[231] = e)}
        />
        <circle
          cx="636.385"
          cy="504.725"
          r="21.945"
          fill="#f5f7fe"
          ref={e => (revealRefs.current[232] = e)}
        />
        <circle
          cx="680.275"
          cy="504.725"
          r="21.945"
          fill="#f0f2fd"
          ref={e => (revealRefs.current[233] = e)}
        />
        <circle
          cx="746.11"
          cy="482.78"
          r="43.89"
          fill="#899cef"
          ref={e => (revealRefs.current[234] = e)}
        />
        <circle
          cx="833.89"
          cy="482.78"
          r="43.89"
          fill="#fefeff"
          ref={e => (revealRefs.current[235] = e)}
        />
        <circle
          cx="921.67"
          cy="482.78"
          r="43.89"
          fill="#6981ea"
          ref={e => (revealRefs.current[236] = e)}
        />
        <path fill="#fff" d="M965.556 438.889h87.778v87.778h-87.778z" />
        <circle
          cx="987.505"
          cy="460.835"
          r="21.945"
          fill="#6c83eb"
          ref={e => (revealRefs.current[237] = e)}
        />
        <circle
          cx="1031.385"
          cy="460.835"
          r="21.945"
          fill="#fbfbfe"
          ref={e => (revealRefs.current[238] = e)}
        />
        <circle
          cx="987.505"
          cy="504.725"
          r="21.945"
          fill="#f8f9fe"
          ref={e => (revealRefs.current[239] = e)}
        />
        <circle
          cx="1031.385"
          cy="504.725"
          r="21.945"
          fill="#768bec"
          ref={e => (revealRefs.current[240] = e)}
        />
        <circle
          cx="1097.22"
          cy="482.78"
          r="43.89"
          fill="#bdc8f6"
          ref={e => (revealRefs.current[241] = e)}
        />
        <path fill="#fff" d="M1141.111 438.889h87.778v87.778h-87.778z" />
        <circle
          cx="1163.055"
          cy="460.835"
          r="21.945"
          fill="#96a7f1"
          ref={e => (revealRefs.current[242] = e)}
        />
        <circle
          cx="1206.945"
          cy="460.835"
          r="21.945"
          fill="#8396ee"
          ref={e => (revealRefs.current[243] = e)}
        />
        <circle
          cx="1163.055"
          cy="504.725"
          r="21.945"
          fill="#6880ea"
          ref={e => (revealRefs.current[244] = e)}
        />
        <circle
          cx="1206.945"
          cy="504.725"
          r="21.945"
          fill="#f2f4fd"
          ref={e => (revealRefs.current[245] = e)}
        />
        <circle
          cx="1272.78"
          cy="482.78"
          r="43.89"
          fill="#6a81eb"
          ref={e => (revealRefs.current[246] = e)}
        />
        <circle
          cx="1360.56"
          cy="482.78"
          r="43.89"
          fill="#879aef"
          ref={e => (revealRefs.current[247] = e)}
        />
        <circle
          cx="43.89"
          cy="570.56"
          r="43.89"
          fill="#d4dbf9"
          ref={e => (revealRefs.current[248] = e)}
        />
        <path fill="#fff" d="M87.778 526.667h87.778v87.778H87.778z" />
        <circle
          cx="109.725"
          cy="548.615"
          r="21.945"
          fill="#bac5f6"
          ref={e => (revealRefs.current[249] = e)}
        />
        <circle
          cx="153.615"
          cy="548.615"
          r="21.945"
          fill="#95a6f0"
          ref={e => (revealRefs.current[250] = e)}
        />
        <circle
          cx="109.725"
          cy="592.505"
          r="21.945"
          fill="#8e9fef"
          ref={e => (revealRefs.current[251] = e)}
        />
        <circle
          cx="153.615"
          cy="592.505"
          r="21.945"
          fill="#fbfcfe"
          ref={e => (revealRefs.current[252] = e)}
        />
        <path fill="#fff" d="M175.556 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="197.505"
          cy="548.615"
          r="21.945"
          fill="#c4cdf7"
          ref={e => (revealRefs.current[253] = e)}
        />
        <circle
          cx="241.385"
          cy="548.615"
          r="21.945"
          fill="#a2b0f2"
          ref={e => (revealRefs.current[254] = e)}
        />
        <circle
          cx="197.505"
          cy="592.505"
          r="21.945"
          fill="#edf0fd"
          ref={e => (revealRefs.current[255] = e)}
        />
        <circle
          cx="241.385"
          cy="592.505"
          r="21.945"
          fill="#b7c2f5"
          ref={e => (revealRefs.current[256] = e)}
        />
        <path fill="#fff" d="M263.333 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="285.275"
          cy="548.615"
          r="21.945"
          fill="#899cef"
          ref={e => (revealRefs.current[257] = e)}
        />
        <circle
          cx="329.165"
          cy="548.615"
          r="21.945"
          fill="#a2b0f2"
          ref={e => (revealRefs.current[258] = e)}
        />
        <circle
          cx="285.275"
          cy="592.505"
          r="21.945"
          fill="#b5c1f5"
          ref={e => (revealRefs.current[259] = e)}
        />
        <circle
          cx="329.165"
          cy="592.505"
          r="21.945"
          fill="#9eadf2"
          ref={e => (revealRefs.current[260] = e)}
        />
        <path fill="#fff" d="M351.111 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="373.055"
          cy="548.615"
          r="21.945"
          fill="#8498ee"
          ref={e => (revealRefs.current[261] = e)}
        />
        <circle
          cx="416.945"
          cy="548.615"
          r="21.945"
          fill="#fafafe"
          ref={e => (revealRefs.current[262] = e)}
        />
        <circle
          cx="373.055"
          cy="592.505"
          r="21.945"
          fill="#b4c0f5"
          ref={e => (revealRefs.current[263] = e)}
        />
        <circle
          cx="416.945"
          cy="592.505"
          r="21.945"
          fill="#dadffa"
          ref={e => (revealRefs.current[264] = e)}
        />
        <path fill="#fff" d="M438.889 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="460.835"
          cy="548.615"
          r="21.945"
          fill="#f9fafe"
          ref={e => (revealRefs.current[265] = e)}
        />
        <circle
          cx="504.725"
          cy="548.615"
          r="21.945"
          fill="#f4f5fd"
          ref={e => (revealRefs.current[266] = e)}
        />
        <circle
          cx="460.835"
          cy="592.505"
          r="21.945"
          fill="#9dadf2"
          ref={e => (revealRefs.current[267] = e)}
        />
        <circle
          cx="504.725"
          cy="592.505"
          r="21.945"
          fill="#e2e7fb"
          ref={e => (revealRefs.current[268] = e)}
        />
        <path fill="#fff" d="M526.667 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="548.615"
          cy="548.615"
          r="21.945"
          fill="#a0aff2"
          ref={e => (revealRefs.current[269] = e)}
        />
        <circle
          cx="592.505"
          cy="548.615"
          r="21.945"
          fill="#6a82eb"
          ref={e => (revealRefs.current[270] = e)}
        />
        <circle
          cx="548.615"
          cy="592.505"
          r="21.945"
          fill="#c3ccf7"
          ref={e => (revealRefs.current[271] = e)}
        />
        <circle
          cx="592.505"
          cy="592.505"
          r="21.945"
          fill="#fbfbfe"
          ref={e => (revealRefs.current[272] = e)}
        />
        <path fill="#fff" d="M614.444 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="636.385"
          cy="548.615"
          r="21.945"
          fill="#abb8f4"
          ref={e => (revealRefs.current[273] = e)}
        />
        <circle
          cx="680.275"
          cy="548.615"
          r="21.945"
          fill="#6a81eb"
          ref={e => (revealRefs.current[274] = e)}
        />
        <circle
          cx="636.385"
          cy="592.505"
          r="21.945"
          fill="#e1e5fb"
          ref={e => (revealRefs.current[275] = e)}
        />
        <circle
          cx="680.275"
          cy="592.505"
          r="21.945"
          fill="#c5cef7"
          ref={e => (revealRefs.current[276] = e)}
        />
        <circle
          cx="746.11"
          cy="570.56"
          r="43.89"
          fill="#93a4f0"
          ref={e => (revealRefs.current[277] = e)}
        />
        <path fill="#fff" d="M790 526.667h87.778v87.778H790z" />
        <circle
          cx="811.945"
          cy="548.615"
          r="21.945"
          fill="#9cacf1"
          ref={e => (revealRefs.current[278] = e)}
        />
        <circle
          cx="855.835"
          cy="548.615"
          r="21.945"
          fill="#758bec"
          ref={e => (revealRefs.current[279] = e)}
        />
        <circle
          cx="811.945"
          cy="592.505"
          r="21.945"
          fill="#fdfeff"
          ref={e => (revealRefs.current[280] = e)}
        />
        <circle
          cx="855.835"
          cy="592.505"
          r="21.945"
          fill="#a2b1f2"
          ref={e => (revealRefs.current[281] = e)}
        />
        <path fill="#fff" d="M877.778 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="899.725"
          cy="548.615"
          r="21.945"
          fill="#cfd7f8"
          ref={e => (revealRefs.current[282] = e)}
        />
        <circle
          cx="943.615"
          cy="548.615"
          r="21.945"
          fill="#96a7f1"
          ref={e => (revealRefs.current[283] = e)}
        />
        <circle
          cx="899.725"
          cy="592.505"
          r="21.945"
          fill="#a1aff2"
          ref={e => (revealRefs.current[284] = e)}
        />
        <circle
          cx="943.615"
          cy="592.505"
          r="21.945"
          fill="#fafbfe"
          ref={e => (revealRefs.current[285] = e)}
        />
        <path fill="#fff" d="M965.556 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="987.505"
          cy="548.615"
          r="21.945"
          fill="#9baaf1"
          ref={e => (revealRefs.current[286] = e)}
        />
        <circle
          cx="1031.385"
          cy="548.615"
          r="21.945"
          fill="#f8f9fe"
          ref={e => (revealRefs.current[287] = e)}
        />
        <circle
          cx="987.505"
          cy="592.505"
          r="21.945"
          fill="#9faef2"
          ref={e => (revealRefs.current[288] = e)}
        />
        <circle
          cx="1031.385"
          cy="592.505"
          r="21.945"
          fill="#a2b0f2"
          ref={e => (revealRefs.current[289] = e)}
        />
        <circle
          cx="1097.22"
          cy="570.56"
          r="43.89"
          fill="#b4c0f5"
          ref={e => (revealRefs.current[290] = e)}
        />
        <path fill="#fff" d="M1141.111 526.667h87.778v87.778h-87.778z" />
        <circle
          cx="1163.055"
          cy="548.615"
          r="21.945"
          fill="#ced6f8"
          ref={e => (revealRefs.current[291] = e)}
        />
        <circle
          cx="1206.945"
          cy="548.615"
          r="21.945"
          fill="#6d84eb"
          ref={e => (revealRefs.current[292] = e)}
        />
        <circle
          cx="1163.055"
          cy="592.505"
          r="21.945"
          fill="#aab7f3"
          ref={e => (revealRefs.current[293] = e)}
        />
        <circle
          cx="1206.945"
          cy="592.505"
          r="21.945"
          fill="#dae0fa"
          ref={e => (revealRefs.current[294] = e)}
        />
        <circle
          cx="1272.78"
          cy="570.56"
          r="43.89"
          fill="#7a8fed"
          ref={e => (revealRefs.current[295] = e)}
        />
        <circle
          cx="1360.56"
          cy="570.56"
          r="43.89"
          fill="#f2f4fd"
          ref={e => (revealRefs.current[296] = e)}
        />
        <circle
          cx="43.89"
          cy="658.33"
          r="43.89"
          fill="#7187eb"
          ref={e => (revealRefs.current[297] = e)}
        />
        <circle
          cx="131.67"
          cy="658.33"
          r="43.89"
          fill="#d2d9f9"
          ref={e => (revealRefs.current[298] = e)}
        />
        <circle
          cx="219.45"
          cy="658.33"
          r="43.89"
          fill="#ebeefc"
          ref={e => (revealRefs.current[299] = e)}
        />
        <circle
          cx="307.22"
          cy="658.33"
          r="43.89"
          fill="#bfc9f6"
          ref={e => (revealRefs.current[300] = e)}
        />
        <path fill="#fff" d="M351.111 614.444h87.778v87.778h-87.778z" />
        <circle
          cx="373.055"
          cy="636.385"
          r="21.945"
          fill="#fafbfe"
          ref={e => (revealRefs.current[301] = e)}
        />
        <circle
          cx="416.945"
          cy="636.385"
          r="21.945"
          fill="#cdd5f8"
          ref={e => (revealRefs.current[302] = e)}
        />
        <circle
          cx="373.055"
          cy="680.275"
          r="21.945"
          fill="#b8c3f5"
          ref={e => (revealRefs.current[303] = e)}
        />
        <circle
          cx="416.945"
          cy="680.275"
          r="21.945"
          fill="#a6b4f3"
          ref={e => (revealRefs.current[304] = e)}
        />
        <circle
          cx="482.78"
          cy="658.33"
          r="43.89"
          fill="#f1f3fd"
          ref={e => (revealRefs.current[305] = e)}
        />
        <path fill="#fff" d="M526.667 614.444h87.778v87.778h-87.778z" />
        <circle
          cx="548.615"
          cy="636.385"
          r="21.945"
          fill="#c5cef7"
          ref={e => (revealRefs.current[306] = e)}
        />
        <circle
          cx="592.505"
          cy="636.385"
          r="21.945"
          fill="#fefeff"
          ref={e => (revealRefs.current[307] = e)}
        />
        <circle
          cx="548.615"
          cy="680.275"
          r="21.945"
          fill="#b4c0f5"
          ref={e => (revealRefs.current[308] = e)}
        />
        <circle
          cx="592.505"
          cy="680.275"
          r="21.945"
          fill="#adbaf4"
          ref={e => (revealRefs.current[309] = e)}
        />
        <circle
          cx="658.33"
          cy="658.33"
          r="43.89"
          fill="#6880ea"
          ref={e => (revealRefs.current[310] = e)}
        />
        <circle
          cx="746.11"
          cy="658.33"
          r="43.89"
          fill="#fafbfe"
          ref={e => (revealRefs.current[311] = e)}
        />
        <path fill="#fff" d="M790 614.444h87.778v87.778H790z" />
        <circle
          cx="811.945"
          cy="636.385"
          r="21.945"
          fill="#889bef"
          ref={e => (revealRefs.current[312] = e)}
        />
        <circle
          cx="855.835"
          cy="636.385"
          r="21.945"
          fill="#bac5f5"
          ref={e => (revealRefs.current[313] = e)}
        />
        <circle
          cx="811.945"
          cy="680.275"
          r="21.945"
          fill="#8fa0f0"
          ref={e => (revealRefs.current[314] = e)}
        />
        <circle
          cx="855.835"
          cy="680.275"
          r="21.945"
          fill="#99a9f1"
          ref={e => (revealRefs.current[315] = e)}
        />
        <path fill="#fff" d="M877.778 614.444h87.778v87.778h-87.778z" />
        <circle
          cx="899.725"
          cy="636.385"
          r="21.945"
          fill="#c1cbf7"
          ref={e => (revealRefs.current[316] = e)}
        />
        <circle
          cx="943.615"
          cy="636.385"
          r="21.945"
          fill="#778cec"
          ref={e => (revealRefs.current[317] = e)}
        />
        <circle
          cx="899.725"
          cy="680.275"
          r="21.945"
          fill="#dde2fa"
          ref={e => (revealRefs.current[318] = e)}
        />
        <circle
          cx="943.615"
          cy="680.275"
          r="21.945"
          fill="#b7c2f5"
          ref={e => (revealRefs.current[319] = e)}
        />
        <circle
          cx="1009.45"
          cy="658.33"
          r="43.89"
          fill="#e2e7fb"
          ref={e => (revealRefs.current[320] = e)}
        />
        <path fill="#fff" d="M1053.333 614.444h87.778v87.778h-87.778z" />
        <circle
          cx="1075.275"
          cy="636.385"
          r="21.945"
          fill="#d1d8f9"
          ref={e => (revealRefs.current[321] = e)}
        />
        <circle
          cx="1119.165"
          cy="636.385"
          r="21.945"
          fill="#788dec"
          ref={e => (revealRefs.current[322] = e)}
        />
        <circle
          cx="1075.275"
          cy="680.275"
          r="21.945"
          fill="#d2d9f9"
          ref={e => (revealRefs.current[323] = e)}
        />
        <circle
          cx="1119.165"
          cy="680.275"
          r="21.945"
          fill="#a2b0f2"
          ref={e => (revealRefs.current[324] = e)}
        />
        <path fill="#fff" d="M1141.111 614.444h87.778v87.778h-87.778z" />
        <circle
          cx="1163.055"
          cy="636.385"
          r="21.945"
          fill="#a0aff2"
          ref={e => (revealRefs.current[325] = e)}
        />
        <circle
          cx="1206.945"
          cy="636.385"
          r="21.945"
          fill="#b1bdf4"
          ref={e => (revealRefs.current[326] = e)}
        />
        <circle
          cx="1163.055"
          cy="680.275"
          r="21.945"
          fill="#7288ec"
          ref={e => (revealRefs.current[327] = e)}
        />
        <circle
          cx="1206.945"
          cy="680.275"
          r="21.945"
          fill="#94a5f0"
          ref={e => (revealRefs.current[328] = e)}
        />
        <path fill="#fff" d="M1228.889 614.444h87.778v87.778h-87.778z" />
        <circle
          cx="1250.835"
          cy="636.385"
          r="21.945"
          fill="#b8c3f5"
          ref={e => (revealRefs.current[329] = e)}
        />
        <circle
          cx="1294.725"
          cy="636.385"
          r="21.945"
          fill="#a9b6f3"
          ref={e => (revealRefs.current[330] = e)}
        />
        <circle
          cx="1250.835"
          cy="680.275"
          r="21.945"
          fill="#e9ecfc"
          ref={e => (revealRefs.current[331] = e)}
        />
        <circle
          cx="1294.725"
          cy="680.275"
          r="21.945"
          fill="#7d91ed"
          ref={e => (revealRefs.current[332] = e)}
        />
        <circle
          cx="1360.56"
          cy="658.33"
          r="43.89"
          fill="#b4bff5"
          ref={e => (revealRefs.current[333] = e)}
        />
        <path fill="#fff" d="M0 702.222h87.778V790H0z" />
        <circle
          cx="21.945"
          cy="724.165"
          r="21.945"
          fill="#fdfdff"
          ref={e => (revealRefs.current[334] = e)}
        />
        <circle
          cx="65.835"
          cy="724.165"
          r="21.945"
          fill="#a2b1f2"
          ref={e => (revealRefs.current[335] = e)}
        />
        <circle
          cx="21.945"
          cy="768.055"
          r="21.945"
          fill="#788ded"
          ref={e => (revealRefs.current[336] = e)}
        />
        <circle
          cx="65.835"
          cy="768.055"
          r="21.945"
          fill="#e3e7fb"
          ref={e => (revealRefs.current[337] = e)}
        />
        <circle
          cx="131.67"
          cy="746.11"
          r="43.89"
          fill="#e1e5fb"
          ref={e => (revealRefs.current[338] = e)}
        />
        <path fill="#fff" d="M175.556 702.222h87.778V790h-87.778z" />
        <circle
          cx="197.505"
          cy="724.165"
          r="21.945"
          fill="#a0aff2"
          ref={e => (revealRefs.current[339] = e)}
        />
        <circle
          cx="241.385"
          cy="724.165"
          r="21.945"
          fill="#f2f4fd"
          ref={e => (revealRefs.current[340] = e)}
        />
        <circle
          cx="197.505"
          cy="768.055"
          r="21.945"
          fill="#dadffa"
          ref={e => (revealRefs.current[341] = e)}
        />
        <circle
          cx="241.385"
          cy="768.055"
          r="21.945"
          fill="#f9fafe"
          ref={e => (revealRefs.current[342] = e)}
        />
        <circle
          cx="307.22"
          cy="746.11"
          r="43.89"
          fill="#bcc7f6"
          ref={e => (revealRefs.current[343] = e)}
        />
        <path fill="#fff" d="M351.111 702.222h87.778V790h-87.778z" />
        <circle
          cx="373.055"
          cy="724.165"
          r="21.945"
          fill="#e0e5fb"
          ref={e => (revealRefs.current[345] = e)}
        />
        <circle
          cx="416.945"
          cy="724.165"
          r="21.945"
          fill="#eff2fd"
          ref={e => (revealRefs.current[346] = e)}
        />
        <circle
          cx="373.055"
          cy="768.055"
          r="21.945"
          fill="#768cec"
          ref={e => (revealRefs.current[347] = e)}
        />
        <circle
          cx="416.945"
          cy="768.055"
          r="21.945"
          fill="#bac5f6"
          ref={e => (revealRefs.current[348] = e)}
        />
        <path fill="#fff" d="M438.889 702.222h87.778V790h-87.778z" />
        <circle
          cx="460.835"
          cy="724.165"
          r="21.945"
          fill="#e7ebfc"
          ref={e => (revealRefs.current[349] = e)}
        />
        <circle
          cx="504.725"
          cy="724.165"
          r="21.945"
          fill="#b8c3f5"
          ref={e => (revealRefs.current[350] = e)}
        />
        <circle
          cx="460.835"
          cy="768.055"
          r="21.945"
          fill="#b6c1f5"
          ref={e => (revealRefs.current[351] = e)}
        />
        <circle
          cx="504.725"
          cy="768.055"
          r="21.945"
          fill="#f7f8fe"
          ref={e => (revealRefs.current[352] = e)}
        />
        <circle
          cx="570.56"
          cy="746.11"
          r="43.89"
          fill="#7d92ed"
          ref={e => (revealRefs.current[353] = e)}
        />
        <circle
          cx="658.33"
          cy="746.11"
          r="43.89"
          fill="#6880ea"
          ref={e => (revealRefs.current[354] = e)}
        />
        <path fill="#fff" d="M702.222 702.222H790V790h-87.778z" />
        <circle
          cx="724.165"
          cy="724.165"
          r="21.945"
          fill="#778cec"
          ref={e => (revealRefs.current[355] = e)}
        />
        <circle
          cx="768.055"
          cy="724.165"
          r="21.945"
          fill="#abb9f4"
          ref={e => (revealRefs.current[356] = e)}
        />
        <circle
          cx="724.165"
          cy="768.055"
          r="21.945"
          fill="#6e85eb"
          ref={e => (revealRefs.current[357] = e)}
        />
        <circle
          cx="768.055"
          cy="768.055"
          r="21.945"
          fill="#cbd4f8"
          ref={e => (revealRefs.current[358] = e)}
        />
        <path fill="#fff" d="M790 702.222h87.778V790H790z" />
        <circle
          cx="811.945"
          cy="724.165"
          r="21.945"
          fill="#ccd4f8"
          ref={e => (revealRefs.current[359] = e)}
        />
        <circle
          cx="855.835"
          cy="724.165"
          r="21.945"
          fill="#8497ee"
          ref={e => (revealRefs.current[360] = e)}
        />
        <circle
          cx="811.945"
          cy="768.055"
          r="21.945"
          fill="#afbcf4"
          ref={e => (revealRefs.current[361] = e)}
        />
        <circle
          cx="855.835"
          cy="768.055"
          r="21.945"
          fill="#cbd3f8"
          ref={e => (revealRefs.current[362] = e)}
        />
        <path fill="#fff" d="M877.778 702.222h87.778V790h-87.778z" />
        <circle
          cx="899.725"
          cy="724.165"
          r="21.945"
          fill="#f8f9fe"
          ref={e => (revealRefs.current[363] = e)}
        />
        <circle
          cx="943.615"
          cy="724.165"
          r="21.945"
          fill="#eef1fd"
          ref={e => (revealRefs.current[364] = e)}
        />
        <circle
          cx="899.725"
          cy="768.055"
          r="21.945"
          fill="#b0bcf4"
          ref={e => (revealRefs.current[365] = e)}
        />
        <circle
          cx="943.615"
          cy="768.055"
          r="21.945"
          fill="#7389ec"
          ref={e => (revealRefs.current[366] = e)}
        />
        <circle
          cx="1009.45"
          cy="746.11"
          r="43.89"
          fill="#b7c2f5"
          ref={e => (revealRefs.current[367] = e)}
        />
        <path fill="#fff" d="M1053.333 702.222h87.778V790h-87.778z" />
        <circle
          cx="1075.275"
          cy="724.165"
          r="21.945"
          fill="#8497ee"
          ref={e => (revealRefs.current[368] = e)}
        />
        <circle
          cx="1119.165"
          cy="724.165"
          r="21.945"
          fill="#6c83eb"
          ref={e => (revealRefs.current[369] = e)}
        />
        <circle
          cx="1075.275"
          cy="768.055"
          r="21.945"
          fill="#c3cdf7"
          ref={e => (revealRefs.current[370] = e)}
        />
        <circle
          cx="1119.165"
          cy="768.055"
          r="21.945"
          fill="#6f85eb"
          ref={e => (revealRefs.current[371] = e)}
        />
        <circle
          cx="1185"
          cy="746.11"
          r="43.89"
          fill="#b4c0f5"
          ref={e => (revealRefs.current[372] = e)}
        />
        <circle
          cx="1272.78"
          cy="746.11"
          r="43.89"
          fill="#c0caf6"
          ref={e => (revealRefs.current[373] = e)}
        />
        <path fill="#fff" d="M1316.667 702.222h87.778V790h-87.778z" />
        <circle
          cx="1338.615"
          cy="724.165"
          r="21.945"
          fill="#a7b5f3"
          ref={e => (revealRefs.current[374] = e)}
        />
        <circle
          cx="1382.505"
          cy="724.165"
          r="21.945"
          fill="#a0aff2"
          ref={e => (revealRefs.current[375] = e)}
        />
        <circle
          cx="1338.615"
          cy="768.055"
          r="21.945"
          fill="#f0f2fd"
          ref={e => (revealRefs.current[376] = e)}
        />
        <circle
          cx="1382.505"
          cy="768.055"
          r="21.945"
          fill="#fdfdff"
          ref={e => (revealRefs.current[377] = e)}
        />
      </g>
    </svg>
  )
}

export default AnimatedBG
