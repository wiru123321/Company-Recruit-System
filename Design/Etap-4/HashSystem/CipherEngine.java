package caesarcipher.domain;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * The class stores the data entered by the user and is responsible 
 * for the encryption and decryption of the text. 
 * Performs the corresponding logical operations.
 * @version 2.1
 */
public class CipherEngine
{
    private String inputFileName;
    private String outputFileName;
    private int shiftNum;
    private CryptMode cryptMode;
    private boolean wasHelpArg;
    private BufferedReader reader;
    private BufferedWriter writer;
    private final int ACII_LETTER_SHIFT = 65;
    private final int LETTERS_NUMBER = 26;
    /**
     * List with all single lines of input file data.
     */
    private final List<String> inputDataTexts;
    
    /**
     * Enum contains crypt modes.
     */
    public enum CryptMode{
        Encrypt,
        Decrypt
    }

    public CipherEngine() {
        this.inputDataTexts = new ArrayList<>();
    }
    
    // Setters for models's private variables
    /**
     * @param text  input file name 
     */
    public void setInputFileName(String text)
    {
        inputFileName = text;
    }
    
    /**
     * @param text  output file name
     */
    public void setOutputFileName(String text)
    {
        outputFileName = text;
    }
    
    /**
     * @param value number letters to shift 
     */
    public void setShiftNumber(int value)
    {
        shiftNum = value;
    }
    
    /**
     * Set crypt mode enum state.
     * @param isEncryptingMode depending on the user's decision
     */
    public void setCryptMode(boolean isEncryptingMode)
    {
        if(isEncryptingMode)
            cryptMode = CryptMode.Encrypt;
        else
            cryptMode = CryptMode.Decrypt;
    }
    
    /**
     * 
     * @param wasHelpArg information about help message was
     */
    public void setWasHelpArg(boolean wasHelpArg)
    {
        this.wasHelpArg = wasHelpArg;
    }
    
    // Getters
    /**
     * @return  <code>true</code> if user use -h argument;
     *          <code>false</code> otherwise.
     */
    public boolean getWasHelpArg()
    {
        return wasHelpArg;
    }
    
    /**
     * A function that activates an encryption or decryption algorithm, 
     * depending on the user's decision. 
     * <p>
     * The function opens files and checks if the input file exists. 
     * In case of problems, the appropriate exception is thrown.
     * @throws InvalidFileContentException 
     */
    public void makeCipher() throws InvalidFileContentException 
    {
        try
        {
            checkIOFiles();
            // Throws exception when input file is empty.
            loadDataFromFile();
            // Based od enum type decision.
            switch(cryptMode){
                case Encrypt:
                    encryptionFileContent();
                    break;
                case Decrypt:
                    decryptionFileContent();
                    break;
            }
        }
        catch(FileNotFoundException ex)
        {
            String msg = "Unable to open: ";
            throw new InvalidFileContentException(inputFileName,msg);
        }
        catch(IOException ex)
        {
            String msg = "Some I/O problems: ";
            throw new InvalidFileContentException(ex.getMessage(),msg);
        }
        finally
        {
            try{
            if(reader != null)
                reader.close();
            if(writer != null)
                writer.close();
            }
            catch(IOException ex)
            {
            }
        }
    }
    
    /**
     * Loads data from input file to vector line by line.
     * @throws InvalidFileContentException 
     */
    // Visible only for testing
    public void loadDataFromFile() throws InvalidFileContentException
    {
        String singleLine = null;
        
        try{
            while ((singleLine = reader.readLine()) != null)
            {
                inputDataTexts.add(singleLine);
            }  
        }
        catch(IOException ex)
        {
        }
        
        if(inputDataTexts.isEmpty())
        {
            String msg = "Input file is empty: ";
            throw new InvalidFileContentException(inputFileName,msg);
        }
    }
    
    /**
     * Encryption of text, text is converted into capital letters and each 
     * character is encrypted according to the rules of Caesar's code. 
     * <p>
     * In case of the end of the text, i. e. when an IOException exception 
     * occurs, the process is finished.
     * <p>
     * Special characters are ignored, only letters of the alphabet are encrypted.
     */
    private void encryptionFileContent() throws IOException
    {
        char encryptedChar;
        // Using for each loop.
        for (String singleLine : inputDataTexts) {
            for (int i = 0; i < singleLine.length(); i++) 
            {
                encryptedChar = encryptSingleCharacter(singleLine.charAt(i));
                writer.write(encryptedChar);
            }
            writer.newLine();
        }
    }

    /**
     * Encrypting single character send as parameter and changed it to upper
     * case letter.
     * <p>
     * If character is not a letter returned original character.
     *
     * @param   toEncrypt   Character to encrypt.
     * @return  Encrypted character.
     */
    // Visible only for tests.
    public char encryptSingleCharacter(char toEncrypt) 
    {
        char ch = Character.toUpperCase(toEncrypt);
        char toReturn = ch;
        if (Character.isLetter(ch)) 
        {
            toReturn = (char) (((int) ch
                    + shiftNum - ACII_LETTER_SHIFT) % LETTERS_NUMBER + ACII_LETTER_SHIFT);
        }
        return toReturn;
    }
    
    /**
     * The decryption of the text, the text is converted to capital 
     * letters and each character is decrypted according to 
     * the rules of Caesar's cipher.
     * <p>
     * If the text ends with an exception (IOException), the process is finished.
     * <p>
     * This process requires checking if the decrypted symbol is 
     * within the lower limit of the ASCII table value.
     */
    private void decryptionFileContent() throws IOException
    {
        char decryptedCharacter;
        // Using for each loop.
        for(String singleLine : inputDataTexts) {
            for (int i = 0; i < singleLine.length(); i++) {
                decryptedCharacter = decryptSingleCharacter(singleLine.charAt(i));
                writer.write(decryptedCharacter);
            }
            writer.newLine();
        }
    }

    /**
     * Decrypting single character send as parameter and changed it to upper
     * case letter.
     * <p>
     * If character is not a letter returned original character.
     * @param   toDecrypt   Character to decrypt.
     * @return  Decrypted character.
     */
    // Visible only for tests.
    public char decryptSingleCharacter(char toDecrypt)
    {
        char ch = Character.toUpperCase(toDecrypt);
        char toReturn = ch;
        if (Character.isLetter(ch)) {
            if (((int) ch - shiftNum) < ACII_LETTER_SHIFT) {
                toReturn = (char) (((int) ch - shiftNum
                        - ACII_LETTER_SHIFT + LETTERS_NUMBER)
                        % LETTERS_NUMBER + ACII_LETTER_SHIFT);
            } else {
                toReturn = (char) (((int) ch - shiftNum
                        - ACII_LETTER_SHIFT) % LETTERS_NUMBER + ACII_LETTER_SHIFT);
            }
        }
        return toReturn;
    }
    
    /**
     * Opening files
     * @throws FileNotFoundException
     * @throws IOException 
     */
    private void checkIOFiles() throws FileNotFoundException, IOException
    {
        reader = new BufferedReader(new FileReader(inputFileName));
        writer = new BufferedWriter(new FileWriter(outputFileName));
    }
}
