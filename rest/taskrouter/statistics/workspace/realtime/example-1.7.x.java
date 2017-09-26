// Install the Java helper library from twilio.com/docs/java/install
import java.util.Map;

import com.twilio.Twilio;
import com.twilio.rest.taskrouter.v1.workspace.WorkspaceRealTimeStatistics;

public class Example {
  private static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  private static final String AUTH_TOKEN = "your_auth_token";
  private static final String WORKSPACE_SID = "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  public static void main(String[] args) {
    Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

    WorkspaceRealTimeStatistics statistics = WorkspaceRealTimeStatistics.fetcher(WORKSPACE_SID).fetch();

    Map<String, Object> tasksByStatus = statistics.get("tasks_by_status");
    System.out.println("Pending Tasks: " + tasksByStatus.get("pending"));
    System.out.println("Assigned Tasks: " + tasksByStatus.get("assigned"));
  }
}
