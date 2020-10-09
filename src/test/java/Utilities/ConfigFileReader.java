package Utilities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Properties;

public class ConfigFileReader {
    private Properties prop;
    private final String propertyFilePath = "./src/test/java/utilities/";

    public ConfigFileReader() {
        InputStream reader = null;
        try {
            reader = new FileInputStream(propertyFilePath + "Config.properties");

//            {
//                @Override
//                public int read() throws IOException {
//                return 0;
//            }
//            } ;
            prop = new Properties();
            try {
                prop.load(reader);
                reader.close();
            } catch (Exception e) {
                e.printStackTrace();
//                Log.info(e.toString());
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("Config.properties not found at " + propertyFilePath);
        }
    }


    public String getDriverPath() {
        String driverPath = prop.getProperty("driverPath");
        if (driverPath != null) return driverPath;
        else throw new RuntimeException("driverPath not specified in the Configuration.properties file.");
    }

    public long getImplicitlyWait() {
        String implicitlyWait = prop.getProperty("implicitlyWait");
        if (implicitlyWait != null) return Long.parseLong(implicitlyWait);
        else throw new RuntimeException("implicitlyWait not specified in the Configuration.properties file.");
    }

    //   public String getApplicationUrl(String googleURL) {
    public String getApplicationUrl() {
        String url = prop.getProperty("googleURL");
        if (url != null) return url;
        else throw new RuntimeException("url not specified in the Configuration.properties file.");
    }

    public String getChromeDriver() {
        String path = prop.getProperty("ChromeDriver");
        if (path != null) return path;
        else throw new RuntimeException("Path not specified in the Configuration.properties file.");
    }


}
