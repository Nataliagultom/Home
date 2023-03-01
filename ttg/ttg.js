var x = [0, 321, 146, 63, 1005, 83, 477, 448, 1186, 684, 96, 849, 337, 32, 943, 116, 847, 392, 654, 1040, 391, 1123, 994, 111, 724, 1044, 555, 1032, 126, 274, 471, 217, 606, 22, 91, 940, 1172, 86, 241, 644, 852, 586, 1184, 282, 343, 917, 459, 2, 33, 678, 558, 297, 600, 506, 198, 97, 1091, 1145, 804, 1170, 789, 295, 1016, 261, 767, 853, 737, 494, 846, 628, 749, 810, 841, 766, 1012, 516, 537, 416, 511, 636, 980, 552, 1042, 623, 582, 457, 331, 89, 419, 399, 489, 307, 1161, 267, 354, 954, 1149, 714, 668, 121, 1212, 122, 666, 683, 786, 959, 335, 165, 440, 1139, 957, 543, 550, 20, 908, 1001, 1124, 313, 197, 336, 127, 332, 979, 1116, 67, 164, 82, 1057, 319, 71, 373, 893, 534, 495, 703, 478, 288, 522, 921, 1182, 257, 334, 988, 897, 809, 310, 710, 832, 1053, 280, 425, 813, 731, 184, 507, 1189, 176, 673, 732, 276, 483, 665, 1234, 398, 59, 296, 1115, 237, 958, 733, 324, 462, 890, 549, 1093, 1027, 1164, 964, 730, 689, 106, 686, 868, 227, 596, 401, 428, 821, 1159, 19, 31, 1011, 953, 1205, 622, 205, 207, 655, 485, 55, 1143];

var provider = "TTG";

for (let i = 1; i < 195; i++) {
    const d = new Date();
    var date = d.getDate();
    var day = d.getDay() + 1;
    var year = d.getFullYear();
    var month = d.getMonth();
    var hour = d.getHours();
    var min = d.getMinutes();

    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }

    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];

    if (i == 44 || i == 35 || i == 48 || i == 74 || i == 105 || i == 41 || i == 69) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }

    var random_val_1 = [10, 25, 50, 100];
    var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length - 1) + 1];
    localStorage.setItem("random_1_xx_" + provider + "_" + i, random_1);

    var random_val_2 = [10, 25, 50, 100];
    var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length - 1) + 1];
    localStorage.setItem("random_2_xx_" + provider + "_" + i, random_2);

    var random_val_3 = [3, 5, 7, 9];
    var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length - 1) + 1];
    localStorage.setItem("random_3_xx_" + provider + "_" + i, random_3);

    var random_val_4 = [10, 25, 50, 100];
    var random_4 = random_val_4[Math.floor(Math.random() * random_val_4.length - 1) + 1];
    localStorage.setItem("random_4_xx_" + provider + "_" + i, random_4);

    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);

    //percentTxt.innerHTML = "RTP " + xx + "%";
    $("#percent-txt-" + i).html("RTP " + xx + "%");
    $("#percent-bar-" + i).attr("aria-valuenow", xx).css("width", xx + "%");

    if (xx < 30) {
        $("#percent-bar-" + i).addClass("red");
    } else if (xx > 70) {
        $("#percent-bar-" + i).addClass("green");
    } else {
        $("#percent-bar-" + i).addClass("yellow");
    }

    $("#" + asd).parent().parent().parent().attr("onclick", "show_popup('" + asd + "', '" + random_1 + "', '" + random_2 + "', '" + random_3 + "', '" + random_4 + "')");
}

/* Menampilkan Popup Pola Main*/
function show_popup(id_percent, random_1, random_2, random_3, random_4) {
    var number_txt = $("#" + id_percent).html();
    var percent = number_txt.replace("%", "").replace("RTP ", "");

    if (percent < 30) {
        $("#popup-container-bad").fadeIn(500);

    } else {
        $("#popup-container-win").fadeIn(500);

        $("#tips_number_1").html(random_1);
        $("#tips_number_2").html(random_2);
        $("#tips_number_3").html(random_3);
        $("#tips_number_4").html(random_4);
    }
}

function close_popup() {
    $(".popup-container").fadeOut(500);
}