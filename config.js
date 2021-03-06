module.exports = {
    rotors: {
        "I": {type: "I", letters: "EKMFLGDQVZNTOWYHXUSPAIBRCJ", step: "R"},
        "II": {type: "II", letters: "AJDKSIRUXBLHWTMCQGZNPYFVOE", step: "F"},
        "III": {type: "III", letters: "BDFHJLCPRTXVZNYEIWGAKMUSQO", step: "W"},
        "IV": {type: "IV", letters: "ESOVPZJAYQUIRHXLNFTGKDCMWB", step: "K"},
        "V": {type: "V", letters: "VZBRGITYUPSDNHLXAWMJQOFECK", step: "A"}
    },
    
    reflectors: {
        "B": ["AY","BR","CU","DH","EQ","FS","GL","IP","JX","KN","MO","TZ","VW"],
        "C": ["AF","BV","CP","DJ", "EI","GO","HY","KR","LZ","MX","NW","TQ","SU"],
        "B_thin": ["AE","BN","CK","DQ","FU","GY","HW","IJ","LO","MP","RX","SZ","TV"],
        "C_thin": ["AR","BD","CO","EJ","FN","GT","HK","IV","LM","PW","QZ","SX","UY"]
    },
    
    validInput: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}