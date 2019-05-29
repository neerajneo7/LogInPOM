package LogInHybridExcercise;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class LoadProp extends Utils
{
    protected Properties prop;
    protected FileInputStream input;
    protected String fileName = "TestDataConfig.properties";
    protected String fileLocation = "src\\test\\Resources\\TestData\\";

    public String getProperty(String key)
    {
        prop= new Properties();

        try {
            input = new FileInputStream(fileLocation+fileName);
            prop.load(input);
            input.close();
        } catch (FileNotFoundException e){
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return prop.getProperty(key);
    }
}
