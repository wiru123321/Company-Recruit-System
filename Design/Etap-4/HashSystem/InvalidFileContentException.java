package caesarcipher.domain;

/**
 * Exception used to inform that there is a IO problem when 
 * opening the file
 * @version 2.0
 */
public class InvalidFileContentException extends Exception
{
    private String fName;
    
    public InvalidFileContentException() {}
    public InvalidFileContentException(String fName, String msg)
    {
        super(msg);
        this.fName = fName;
    }
    public String getFileName()
    {
        return fName;
    }
}
