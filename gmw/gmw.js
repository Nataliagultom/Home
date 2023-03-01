var x = [0, 6841, 4619, 8665, 1863, 5343, 9417, 8719, 5201, 3294, 2529, 6648, 4099, 2836, 3617, 9147, 4885, 4668, 6322, 7278, 9876, 4221, 9647, 6877, 3436, 5317, 1245, 5677, 1222, 1936, 1254, 7020, 8569, 9911, 8587, 8156, 6568, 6082, 1649, 1842, 8754, 3166, 6262, 7422, 8538, 3717, 7937, 5095, 3010, 6369, 4227, 6036, 9915, 9436, 6314, 1352, 3541, 6857, 4440, 6800, 6610, 1383, 9628, 5024, 8741, 7456, 9624, 3138, 4270, 4150, 6184, 7330, 9006, 7214, 6001, 4728, 6259, 2841, 6848, 2438, 7507, 7478, 5265, 6335, 4530, 4876, 1579, 6696, 4759, 6680, 8725, 3373, 2121, 2210, 1524, 5949, 7163, 4748, 4258, 2708, 9668, 9495, 5806, 8139, 9448, 4147, 7196, 4700, 9630, 7349, 9405, 3182, 5543, 6807, 1715, 8550, 7383, 3542, 3016, 9583, 9772, 1233, 6239, 7669, 2208, 2021, 2179, 4952, 2780, 1314, 6348, 4542, 5263, 9605, 4315, 4073, 8602, 3873, 9934, 5674, 3800, 9378, 7298, 7965, 6977, 4570, 4920, 2429, 6053, 3712, 7375, 4054, 3485, 2666, 5503, 1223, 1183, 8642, 9598, 3404, 1574, 5391, 8265, 9577, 4758, 2363, 9999, 4702, 7815, 3029, 1359, 5385, 8042, 7109, 1529, 4486, 1867, 2646, 4989, 8188, 1860, 5411, 8446, 1108, 4364, 3264, 2199, 5352, 5099, 9665, 7907, 8861, 5033, 9516, 7469, 2504, 8234, 5430, 1614, 4786, 7504, 8194, 5230, 4908, 4376, 4983, 8548, 9935, 4692, 1789, 4559, 5945, 9536, 8399, 3023, 1611, 5979, 7505, 9571, 5788, 1982, 2940, 7555, 2300, 8400, 3082, 4546, 1852, 7396, 6283, 8880, 4255, 3929, 2344, 1277, 1553, 8541, 4697, 3574, 7995, 2470, 2137, 4064, 7062, 6915, 8599, 6799, 3296, 4062, 1880, 4451, 6561, 7252, 4567, 5055, 6594, 5743, 5676, 7614, 7049, 2483, 3144, 4803, 1914, 8187, 7896, 4162, 2904, 4688, 5496, 5871, 8963, 5687, 9545, 7063, 9648, 6975, 3920, 5280, 9016, 8520, 4683, 3956, 5917, 2463, 9988, 2773, 1325, 2922, 2506, 1471, 5216, 3775, 6844, 2436, 6852, 6422, 2392, 5621, 7083, 2898];

var provider = "GMW";

for (let i = 1; i < 300; i++) {
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

    if (i == 40 || i == 31 || i == 44 || i == 70 || i == 101 || i == 37 || i == 65) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }

    var random_val_1 = [15, 25, 35, 45, 55];
    var random_1 = random_val_1[Math.floor(Math.random() * random_val_1.length - 1) + 1];
    localStorage.setItem("random_1_xx_" + provider + "_" + i, random_1);

    var random_val_2 = [10, 20, 30, 40, 50];
    var random_2 = random_val_2[Math.floor(Math.random() * random_val_2.length - 1) + 1];
    localStorage.setItem("random_2_xx_" + provider + "_" + i, random_2);

    var random_val_3 = [3, 5, 7, 9];
    var random_3 = random_val_3[Math.floor(Math.random() * random_val_3.length - 1) + 1];
    localStorage.setItem("random_3_xx_" + provider + "_" + i, random_3);

    var random_val_4 = [20, 30, 40, 50, 60, 70];
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