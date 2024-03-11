import java.util.Arrays;

public class Graph {

    // EDITABLE
    public static int LENGTH = 3;
    public static int GRAD = 3;
    public static int STEP = 1;
    public static int VIEW_DISTANCE_X = 14;
    public static String INDENTIFIER_ORI = "#";

    // NON-EDITABLE
    public static int MIN = LENGTH * -1;
    public static int MAX = LENGTH;
    public static double HIGHEST_POINT;
    public static String[][] MATRIX;
    public static String INDENTIFIER = " ".repeat(VIEW_DISTANCE_X / 2) + INDENTIFIER_ORI + " ".repeat(VIEW_DISTANCE_X / 2 - 1);
    public static int HORIZONTAL_LENGTH = MAX + Math.abs(MIN);
    public static int VERITICAL_LENGTH;

    public static void main(String[] args) {
        initVariables();
        initMatrix();

        for (int i = 0; i <= HORIZONTAL_LENGTH; i += STEP) {
            int index = (int) CalFunction(i - (Math.abs(MIN)));
            if(index == 0) {
                MATRIX[index + (int) HIGHEST_POINT][i] = INDENTIFIER_ORI;
            } else {
                MATRIX[index + (int) HIGHEST_POINT][i] = INDENTIFIER;
            }
        }

        for (int i = VERITICAL_LENGTH; i >= 0; i -= STEP) {
            System.out.println(joinString(MATRIX[i]));
        }
    }

    static void initMatrix() {
        for (int i = 0; i <= VERITICAL_LENGTH; i += STEP) {
            MATRIX[i] = new String[HORIZONTAL_LENGTH + 1];
            if(i == HIGHEST_POINT) {
                for(int j = 0;j < MATRIX[i].length;j++) {
                    MATRIX[i][j] = "-".repeat(VIEW_DISTANCE_X / 2) + Math.abs(j - MAX) + "-".repeat((VIEW_DISTANCE_X / 2) - 1);
                }
            } else {
                Arrays.fill(MATRIX[i], " ".repeat(VIEW_DISTANCE_X));
            }
        }
        for(int i = 0;i < MATRIX.length;i++) {
            if(i % 5 == 0 && i - HIGHEST_POINT + 2 != 0) {
                MATRIX[i][LENGTH] = i - HIGHEST_POINT + 2 + "";
            } else {
                MATRIX[i][LENGTH] = "|";
            }
        }
    }

    static void initVariables() {
        HIGHEST_POINT = CalFunction(MAX);
        VERITICAL_LENGTH = (int) HIGHEST_POINT * 2;
        MATRIX = new String[VERITICAL_LENGTH + 1][HORIZONTAL_LENGTH + 1];
    }

    static double CalFunction(int x) {
        return Math.pow(x, GRAD);
    }

    static String joinString(String[] array) {
        String joinedString = "";
        for (String s : array) {
            joinedString += s;
        }
        return joinedString;
    }
}
