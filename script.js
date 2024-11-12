const getConfig = document.getElementById("get-config");
const saveConfig = document.getElementById("save-config");
const getUser = document.getElementById("get-user");
const checkUser = document.getElementById("check-user");

document.addEventListener("DOMContentLoaded", () => {
    BX24.init(() => {
        checkUser.addEventListener("click", () => {
            console.log(BX24.isAdmin());
            BX24.callMethod(
                "user.admin",
                {},
                function (result) {
                    if (result.error())
                        console.error(result.error());
                    else
                        console.log(result.data());
                }
            );
        });
        saveConfig.addEventListener("click", () => {
            BX24.appOption.set('test_param', "value_test_param");
        });
        getConfig.addEventListener("click", () => {
            console.log(BX24.appOption.get("test_param"));
        });
        getUser.addEventListener("click", () => {
            BX24.callMethod(
                "profile",
                {},
                function (result) {
                    if (result.error())
                        console.error(result.error());
                    else
                        console.log(result.data());
                }
            );
        });
    });
});
