import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {
    public static void main(String[] args) {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/db_name", "username", "password");
            stmt = conn.createStatement();
            String sql = "SELECT upi FROM notice WHERE id='1'";
            rs = stmt.executeQuery(sql);
            String upi1 = "";
            if (rs.next()) {
                upi1 = rs.getString("upi");
            }
            String[] a = {upi1};
            int randomIndex = (int) (Math.random() * a.length);
            String upiid = a[randomIndex];
            String am = request.getParameter("am");
            String user = request.getParameter("user");
            conn.close();
        } catch (SQLException se) {
            se.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (stmt != null)
                    stmt.close();
            } catch (SQLException se2) {
            }
            try {
                if (conn != null)
                    conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }
        PrintWriter out = response.getWriter();
        out.println("<html lang=\"en\">");
        out.println("<head>");
        out.println("<meta http-equiv=\"Content-Type\" content=\"text/html;charset=utf-8\">");
        out.println("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">");
        out.println("<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\">");
        out.println("<meta http-equiv=\"pragma\" content=\"no-cache\">");
        out.println("<meta http-equiv=\"Cache-Control\" content=\"no-cache, must-revalidate\">");
        out.println("<meta http-equiv=\"expires\" content=\"1\">");
        out.println("<meta name=\"google\" value=\"notranslate\">");
        out.println("<meta name=\"msapplication-TileColor\" content=\"");
        out.println("<meta name=\"theme-color\" content=\"");
        out.println("<meta name=\"msapplication-navbutton-color\" content=\"");
        out.println("<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"");
        out.println("<meta name=\"description\" content=\"Make money with 0076\">");
        out.println("<link rel=\"shortcut icon\" href=\"fevicon.png\" type=\"image/x-icon\">");
        out.println("<meta name=\"twitter:card\" content=\"summary\">");
        out.println("<meta name=\"twitter:title\" content=\"0076\">");
        out.println("<meta name=\"twitter:site\" content=\"0076\">");
        out.println("<meta name=\"twitter:description\" content=\"Make money with 0076\">");
        out.println("<meta name=\"twitter:image\" content=\"logo.jpg\">");
        out.println("<meta property=\"og:title\" content=\"0076\">");
        out.println("<meta property=\"og:type\" content=\"website\">");
        out.println("<meta property=\"og:site_name\" content=\"0076\">");
        out.println("<meta property=\"og:url\" content=\"\">");
        out.println("<meta name=\"msapplication-TileImage\" content=\"logo.jpg\">");
        out.println("<meta property=\"og:image\" content=\"logo.jpg\">");
        out.println("<meta property=\"og:description\" content=\"Make money with 0076\">");
        out.println("<meta property=\"url\" content=\"\">");
        out.println("<meta property=\"type\" content=\"website\">");
        out.println("<meta property=\"title\" content=\"0076\">");
        out.println("<meta property=\"description\" content=\"Make money with 0076\">");
        out.println("<meta property=\"image\" content=\"logo.jpg\">");
        out.println("<meta itemprop=\"image\" content=\"logo.jpg\">");
        out.println("<link rel=\"stylesheet\" href=\"bootstrap.min.css\">");
        out.println("<link rel=\"stylesheet\" href=\"light.css?23.2.21.6\">");
        out.println("<link rel=\"stylesheet\" href=\"dropzone.css?23.2.21.6\">");
        out.println("<style>");
        out.println("@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');");
        out.println("</style>");
        out.println("<title>0076</title>");
        out.println("<script>");
        out.println("function upiPay(mode) {");
        out.println("var inputc = document.body.appendChild(document.createElement(\"input\"));");
        out.println("inputc.value = document.getElementById(\"upiid\").innerHTML.trim();");
        out.println("inputc.focus();");
        out.println("inputc.select();");
        out.println("document.execCommand('copy');");
        out.println("inputc.parentNode.removeChild(inputc);");
        out.println("setTimeout(function() {");
        out.println("window.location.replace(\"https://bingoclub.in/payment/confirmpayment?am=\" + am + \"&user=\" + user + \"&mode=\" + mode);");
        out.println("}, 100);");
        out.println("}");
        out.println("</script>");
        out.println("</head>");
        out.println("<body>");
        out.println("<section class=\"container-fluid\">");
        out.println("<div class=\"row mcas\">");
        out.println("<div class=\"col-md-6 col-lg-4 main\">");
        out.println("<div class=\"row\" id=\"warea\">");
        out.println("<div class=\"col-12 m-record\">");
        out.println("<div class=\"row nav-top auto\">");
        out.println("<div class=\"col-3 xtl tf-14\"><span class=\"nav-back wt\" onclick=\"window.location.href='/\">");
        out.println("<div class=\"col-6 tfw-7 tf-18\">Recharge</div>");
        out.println("<div class=\"col-3 xtr tf-14\"><span onclick=\"rchl()\">Help</span></div>");
        out.println("<div class=\"col-12 xtl tf-16 pt-2\">Recharge Amount</div>");
        out.println("<div class=\"col-12 xtl tf-18 pb-2\">₹ <span class=\"tf-36 tfw-7\" id=\"rmt\">" + am + "</span></div>");
        out.println("</div>");
        out.println("<div class=\"row\">");
        out.println("<div class=\"col-12 xtl tfw-6 tf-16 mt-4 tfcdb\">Select Payment Method</div>");
        out.println("<div class=\"col-12 mt-4\">");
        out.println("<div class=\"row mr-0\">");
        out.println("<div class=\"col-12 rcalbx\" id=\"dtaod\">");
        out.println("<div class=\"row rowvac h56 tfwr mcpl\" onclick=\"upiPay('PhonePe')\">");
        out.println("<div class=\"col-10 xtl tf-12\">");
        out.println("<span class=\"phonepe-logo\"></span>");
        out.println("<span class=\"tfw-5 tf-16\">PhonePe</span>");
        out.println("<span class=\"ml-2 dipn\" id=\"upiid\">" + upiid + "</span>");
        out.println("</div>");
        out.println("<div class=\"col-2 pt-1 xtc\">");
        out.println("<input type=\"radio\" id=\"ppc\">");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class=\"row rowvac h56 mcpl\" onclick=\"upiPay('Paytm')\">");
        out.println("<div class=\"col-10 xtl tf-12\">");
        out.println("<span class=\"paytm-logo\"></span>");
        out.println("<span class=\"tfw-5 tf-16\">Paytm</span>");
        out.println("<span class=\"ml-2 dipn\" id=\"upx2\"></span>");
        out.println("</div>");
        out.println("<div class=\"col-2 pt-1 xtc\">");
        out.println("<input type=\"radio\" id=\"payc\">");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class=\"row rowvac h56 mcpl\" onclick=\"upiPay('GPay')\">");
        out.println("<div class=\"col-10 xtl tf-12\">");
        out.println("<span class=\"gpay-logo\"></span>");
        out.println("<span class=\"tfw-5 tf-16\">GPay</span>");
        out.println("<span class=\"ml-2 dipn\" id=\"upx3\"></span>");
        out.println("</div>");
        out.println("<div class=\"col-2 pt-1 xtc\">");
        out.println("<input type=\"radio\" id=\"gpc\">");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class=\"row rowvac h56 mcpl\" onclick=\"return upiPay('upi')\">");
        out.println("<div class=\"col-10 xtl tf-12 rcaupi\">");
        out.println("<span class=\"upi nxl\"></span>");
        out.println("<span class=\"tfw-5 tf-20\">Apps</span>");
        out.println("<span class=\"ml-2 dipn\" id=\"upx4\"></span>");
        out.println("</div>");
        out.println("<div class=\"col-2 pt-1 xtc\">");
        out.println("<input type=\"radio\" id=\"upc\">");
        out.println("</div>");
        out.println("</div>");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class=\"col-12 mt-4 justify mt-3 tfcdg\">");
        out.println("<div class=\"tfcdb pb-2 tf-16\">Tips</div>");
        out.println("<p>Welcome to use the quick recharge mode, please use APP to complete the payment of ₹<span id=\"rcmtl\">450</span></p>");
        out.println("<p>The transaction funds are guaranteed by the 0076 platform throughout the process, which is very safe.</p>");
        out.println("<p>Please do not include any words in remarks.</p>");
        out.println("</div>");
        out.println("</div>");
        out.println("</div>");
        out.println("</div>");
        out.println("</div>");
        out.println("<div class=\"row\" id=\"odrea\"></div>");
        out.println("<div class=\"row\" id=\"opffp\"></div>");
        out.println("<div class=\"row\" id=\"anof\"></div>");
        out.println("<div class=\"row\" id=\"dta_ref\"></div>");
        out.println("</div>");
        out.println("</div>");
        out.println("</section>");
        out.println("<input type=\"file\" class=\"dz-hidden-input\" accept=\".png,.PNG,.jpg,.jpeg,.JPG,.JPEG\" style=\"visibility: hidden; position: absolute; top: 0px; left: 0px; height: 0px; width: 0px;\">");
        out.println("</body>");
        out.println("</html>");
    }
}


