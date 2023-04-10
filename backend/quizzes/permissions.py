from rest_framework import permissions

class IsAdminOrTeacherPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.user.is_anonymous == False:
            if request.user.role == "STAFF":
                return True
        return False